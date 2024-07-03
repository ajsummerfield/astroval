import type { ValidationResult } from "../types/ValidationResult";
import Validator from "./Validator";

abstract class InputValidator extends Validator<HTMLInputElement> {
  public abstract validate(): ValidationResult;
}

export default InputValidator;