const print = require("./console/print");
const input = require("./console/input");
const message = require("./util/message");
const User = require("./User");
const LottoGenerator = require("./LottoGenerator");
const Lotto = require("./Lotto");
const rank = require("./util/rank");
const lottoRank = require("./util/lottoRank");
const Validator = require("./Validator");
const TypeConverter = require("./util/TypeConverter");

class App {
  constructor() {
    this.input = new input();
    this.print = new print();
    this.user = new User();
    this.hitLotto;
    this.bonusNumber;
  }

  play() {
    this.print.print(message.INPUT_MESSAGE);
    this.input.readLine(this.handleByFee.bind(this));
  }

  handleByFee(fee) {
    fee = TypeConverter.stringToNumber(fee);

    if (!Validator.isRightFee(+fee)) {
      throw new Error("[ERROR]");
    }
    this.user.fee = fee;
    this.printUserLottos();
    this.print.print(message.HIT_NUMBER);
    this.input.readLine(this.handleHitLottos.bind(this));
  }

  handleHitLottos(hitLottos) {
    hitLottos = TypeConverter.stringToArray(hitLottos, ",").map((e) => +e);

    if (!Validator.isRightLottoNumbers(hitLottos)) {
      throw new Error("[ERROR]");
    }
    this.hitLotto = new Lotto(hitLottos);
    this.print.print(message.BONUS_NUMBER);
    this.input.readLine(this.handleBonusNumber.bind(this));
  }

  handleBonusNumber(number) {
    number = TypeConverter.stringToNumber(number);

    if (
      !Validator.isRightLottoNumber(number) ||
      Validator.isNumberInArray(this.hitLotto.getNumbers(), number)
    ) {
      throw new Error("[ERROR]");
    }
    this.bonusNumber = number;
    this.showStat();
  }

  showStat() {
    this.user.calculateStat(this.hitLotto, this.bonusNumber);
    this.print.print(message.PRIZE_STAT);
    this.print.print(message.LINE);
    this.printStat();
    this.input.close();
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
