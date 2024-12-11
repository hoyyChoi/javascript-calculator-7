import { ErrorHandler } from "../ErrorHandler.js";
import { ERROR_MESSAGES } from "../constants.js";

export class InputValidator {
  static validate(string) {
    if (!string.trim()) ErrorHandler(ERROR_MESSAGES.EMPTY_STRING);
    if (/\s/.test(string)) ErrorHandler(ERROR_MESSAGES.INVALID_FORMAT);
  }
}
