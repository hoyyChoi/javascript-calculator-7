import { Console } from "@woowacourse/mission-utils";

class inputHandler {
  async handleInput(prompt, validateFn) {
    while (true) {
      const input = Console.readLineAsync(prompt);
      try {
        return validateFn(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async 함수이름() {
    return this.handleInput(PROMPT_MESSAGES.ORDER_TEXT, this.validateOrderItem);
  }

  async inputString() {
    return await Console.readLineAsync("입력값 : ");
  }
}

export default inputHandler;
