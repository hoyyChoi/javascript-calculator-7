import { ErrorHandler } from "../ErrorHandler.js";

export class StringCalculator {
  static calculate(value, delimiter) {
    const array = value
      .split(delimiter)
      .map(Number)
      .filter((item) => {
        if (item < 0) ErrorHandler("a");
        return item;
      });
    return array.reduce((acc, init) => acc + init, 0);
  }
}
