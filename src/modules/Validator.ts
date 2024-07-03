import type { ValidationResult } from "../types/ValidationResult";

abstract class Validator<T extends HTMLElement> extends HTMLElement {
  protected element: T;
  private errorElement: Element;
  private eventTypes: string[];

  constructor(eventTypes: string[] = ['blur', 'keyup', 'change']) {
    super();
    this.element = this.querySelector<T>('input');
    this.errorElement = this.element.nextElementSibling;
    this.eventTypes = eventTypes;
    this.addListeners();
  }

  private addListeners = (): void => {
    this.eventTypes.forEach(this.addListener);
  };

  private addListener = (eventType: string): void => {
    this.element.addEventListener(eventType, this.handleValidation);
  }

  private handleValidation = (): void => {
    const validationResult = this.validate();
    const errorContent = validationResult.isValid ? null : validationResult.errorMessage;
    this.errorElement.textContent = errorContent;
  }

  public abstract validate(): ValidationResult;
}

export default Validator;