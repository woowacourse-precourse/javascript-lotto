const print = require("./console/print");
const input = require("./console/input");
const message = require("./util/message");
const User = require("./User");
const Validator = require("./Validator");
const LottoGenerator = require("./LottoGenerator");

class App {
  constructor() {
    this.input = new input();
    this.print = new print();
    this.user = new User();
  }

  async play() {
    await this.inputByFeeView();
    printUserLottos();
  }

  async inputByFeeView() {
    this.print.print(message.INPUT_MESSAGE);

    let fee = await this.input
      .fee()
      .then((resolve) => resolve)
      .catch((e) => {});

    this.user.fee = fee;
  }

  printUserLottos() {
    this.user.calculateLottoCount();
    this.user.lottos = LottoGenerator.generatedByCount(this.user.lottoCount);
    this.print.print(`${this.user.lottoCount}${message.BUY_MESSAGE}`);

    this.user.lottos.forEach((lotto) => {
      this.print.print(lotto.show());
    });
  }
}

module.exports = App;
