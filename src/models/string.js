import { InputValidator } from "./InputValidator.js";
import { DelimiterProcessor } from "./DelimiterProcessor.js";
import { StringCalculator } from "./StringCalculator.js";

export class StringObject {
  #totalSum;

  constructor(string) {
    InputValidator.validate(string);
    const { value, delimiter } = DelimiterProcessor.process(string);
    this.#totalSum = StringCalculator.calculate(value, delimiter);
  }

  getTotal() {
    return this.#totalSum;
  }
}
