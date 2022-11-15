const print = require("./console/print");
const input = require("./console/input");
const message = require("./util/message");
const User = require("./User");
const Validator = require("./Validator");

class App {
  constructor() {
    this.input = new input();
    this.print = new print();
    this.user = new User();
  }

  play() {
    this.buyMessagePrint();
  }

  async buyMessagePrint() {
    this.print.print(message.INPUT_MESSAGE);
    let buyFee = await this.input.inputLine();

    if (!Validator.isRightNumber(buyFee)) {
      throw new Error("[ERROR] : 올바른 금액이 아닙니다.");

      return;
    }
    this.user.fee = buyFee;
  }
}

module.exports = App;
