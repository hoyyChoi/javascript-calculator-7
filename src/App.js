import { outPutHandler } from "./views/outputHandler.js";
import inputHandler from "./views/inputHandler.js";
import { StringObject } from "./models/string.js";

// \n -> 사이에 있어야함.
class App {
  constructor() {
    this.input = new inputHandler();
    this.output = new outPutHandler();
  }
  async run() {
    const string = await this.input.inputString();
    const StringObj = new StringObject(string);
    const total = StringObj.getTotal();
    this.output.resultPrint(total);
  }
}

export default App;
