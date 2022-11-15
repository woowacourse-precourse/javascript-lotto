const print = require("./console/print");
const input = require("./console/input");
const message = require("./util/message");
const User = require("./User");
const Validator = require("./Validator");
const LottoGenerator = require("./LottoGenerator");
const Lotto = require("./Lotto");
const TypeConverter = require("./util/TypeConverter");

class App {
  constructor() {
    this.input = new input();
    this.print = new print();
    this.user = new User();
    this.hitlotto;
    this.bonusNumber;
  }

  async play() {
    await this.inputByFeeView();
    this.printUserLottos();
    await this.inputHitNumberView();
    await this.inputBonusView();
  }

  async inputByFeeView() {
    this.print.print(message.INPUT_MESSAGE);

    let fee = await this.input
      .fee()
      .then((resolve) => resolve)
      .catch((e) => {});

    this.user.fee = fee;
  }

  async inputHitNumberView() {
    this.print.print(message.HIT_NUMBER);

    const numbers = await this.input
      .hitNumber()
      .then((resolve) => resolve)
      .catch((e) => {});

    this.hitlotto = new Lotto(numbers);
  }

  async inputBonusView() {
    this.print.print(message.BONUS_NUMBER);

    const bonusNumber = await this.input
      .bonus(this.hitlotto.getNumbers())
      .then((resolve) => resolve)
      .catch((e) => {});

    this.bonusNumber = bonusNumber;
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
