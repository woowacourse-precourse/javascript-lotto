const OutputUI = require('./ui/OutputUI');
const InputUI = require('./ui/InputUI');
const message = require('./util/message');
const User = require('./User');
const LottoGenerator = require('./LottoGenerator');
const Vaildator = require('./Vaildator');
const Lotto = require('./Lotto');
const TypeConverter = require('./util/TypeConverter');

class App {
  constructor() {
    this.input = new InputUI();
    this.output = new OutputUI();
    this.user = new User();
    this.hitLotto;
    this.bonusNumber;
  }

  async play() {
    await this.inputBuyAmountView();
    this.printUserLottos();
    await this.inputHitNumberView();
    await this.inputBonusView();
  }

  async inputBuyAmountView() {
    this.output.print(message.INPUT_AMOUNT);
    let amount = await this.input
      .amount()
      .then((resolve) => resolve)
      .catch((e) => {});
    this.user.amount = amount;
  }

  async inputHitNumberView() {
    this.output.print(message.HIT_NUMBER);
    const numbers = await this.input
      .hitNumber()
      .then((resolve) => resolve)
      .catch((e) => {});
    this.hitLotto = new Lotto(numbers);
  }

  async inputBonusView() {
    this.output.print(message.BONUS_NUMBER);
    const bonusNumber = await this.input
      .bonus(this.hitLotto.getNumbers())
      .then((resolve) => resolve)
      .catch((e) => {});
    this.bounsNumber = bonusNumber;
  }

  printUserLottos() {
    this.user.calculateLottoCount();
    this.user.lottos = LottoGenerator.generatedByCount(this.user.lottoCount);
    this.output.print(`${this.user.lottoCount}${message.BUY_AMOUNT}`);

    this.user.lottos.forEach((lotto) => {
      this.output.print(lotto.show());
    });
  }
}

module.exports = App;
