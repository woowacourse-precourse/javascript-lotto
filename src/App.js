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
    this.inputByFeeView();
  }

  inputByFeeView() {
    this.print.print(message.INPUT_MESSAGE);
    this.input.inputLine(this.handleInputByFee.bind(this));
  }

  handleInputByFee(value) {
    const fee = +value;

    if (!Validator.isRightFee(fee)) {
      throw new Error("[ERROR] : 잘못된 금액을 입력했습니다.");
    }

    this.user.fee = fee;
    this.input.close();
  }
}

module.exports = App;
