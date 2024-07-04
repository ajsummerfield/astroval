type AstrovalOptions = {
  onValidated: () => void;
  onInvalidated: () => void;
};

class Astroval {
  private formElement: HTMLFormElement;
  private formFieldElements: Element[];
  private options: AstrovalOptions;

  constructor(formElement: HTMLFormElement | null, options: AstrovalOptions) {
    if (!formElement) {
      throw new Error('Specified formElement does not exist!');
    }

    this.formElement = formElement;
    this.options = options;
    this.formFieldElements = Array.from(this.formElement.elements);
    this.addListeners();
  }

  private onSubmit = (event: Event) : boolean => {
    if (!this.formElement.checkValidity()) {
      event.preventDefault();
      this.options.onInvalidated();
      return false;
    }

    this.options.onValidated();
    return true;
  };

  private addListeners = () : void => {
    this.formElement.setAttribute('novalidate', '');
    this.formElement.addEventListener('submit', this.onSubmit)
  };
};

export default Astroval;