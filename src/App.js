const print = require("./console/print");
const input = require("./console/input");
const message = require("./util/message");
const User = require("./User");
const LottoGenerator = require("./LottoGenerator");
const Lotto = require("./Lotto");
const rank = require("./util/rank");
const lottoRank = require("./util/lottoRank");

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
    this.user.calculateStat(this.hitlotto, this.bonusNumber);
    this.printStat();
    this.input.close();
  }

  async inputByFeeView() {
    // this.print.print(message.INPUT_MESSAGE);

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

    this.bonusNumber = await this.input
      .bonus(this.hitlotto.getNumbers())
      .then((resolve) => resolve)
      .catch((e) => {});
  }

  printUserLottos() {
    this.user.calculateLottoCount();
    this.user.lottos = LottoGenerator.generatedByCount(this.user.lottoCount);
    this.print.print(`${this.user.lottoCount}${message.BUY_MESSAGE}`);

    this.user.lottos.forEach((lotto) => {
      this.print.print(lotto.show());
    });
  }

  printStat() {
    this.print.print(message.PRIZE_STAT);
    this.print.print(message.LINE);
    this.printHitResult();
    this.print.print(message.returnOfInvestment(this.user.returnOfInvestment));
  }

  printHitResult() {
    for (let i = rank.FIFTH; i >= rank.FIRST; i--) {
      const { prize, isBonus, matchCount } = lottoRank[i];

      this.print.print(
        message.hitStat(matchCount, prize, this.user.hitRanks[i], isBonus)
      );
    }
  }
}

module.exports = App;
