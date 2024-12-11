import { CUSTOM_DELIMITER_PATTERN, DEFAULT_DELIMITER } from "../constants.js";

export class DelimiterProcessor {
  static process(string) {
    const match = string.match(CUSTOM_DELIMITER_PATTERN);
    let delimiter = DEFAULT_DELIMITER;
    let value = string;

    if (match) {
      delimiter = new RegExp(match[1]);
      value = string.split(/\\n/)[1];
    }

    return { value, delimiter };
  }
}
