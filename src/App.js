const OutputUI = require('./ui/OutputUI');
const InputUI = require('./ui/InputUI');
const message = require('./util/message');
const rank = require('./util/rank');
const lottoRank = require('./util/lottoRank');
const TypeConverter = require('./util/TypeConverter');
const error = require('./util/error');
const LottoGenerator = require('./lotto/LottoGenerator');
const Lotto = require('./lotto/Lotto');
const Vaildator = require('./Vaildator');
const User = require('./User');

class App {
  constructor() {
    this.input = new InputUI();
    this.output = new OutputUI();
    this.user = new User();
    this.hitLotto;
    this.bonusNumber;
  }

  play() {
    this.output.print(message.INPUT_AMOUNT);
    this.input.readLine(this.handleAmount.bind(this));
  }

  handleAmount(amount) {
    amount = TypeConverter.stringToNumber(amount);
    if (!Vaildator.isRightAmount(amount)) {
      throw new Error(error.INVALID_AMOUNT);
    }
    this.user.amount = amount;
    this.printUserLottos();
    this.output.print(message.HIT_NUMBER);
    this.input.readLine(this.handleHitNumbers.bind(this));
  }

  handleHitNumbers(hitNumbers) {
    hitNumbers = TypeConverter.stringToArray(hitNumbers, ',').map((e) => +e);
    if (!Vaildator.isRightLottoNumbers(hitNumbers)) {
      throw new Error(error.INVALID_HIT_NUMBERS);
    }
    this.hitLotto = new Lotto(hitNumbers);
    this.output.print(message.BONUS_NUMBER);
    this.input.readLine(this.handleBonusNumber.bind(this));
  }

  handleBonusNumber(number) {
    number = TypeConverter.stringToNumber(number);
    if (
      !Vaildator.isRightLottoNumber(number) ||
      Vaildator.isDuplicateNumberInArray(this.hitLotto.getNumbers(), number)
    ) {
      throw new Error(error.INVALID_BONUS_NUMBER);
    }
    this.bonusNumber = number;
    this.showStat();
  }

  showStat() {
    this.user.calcStat(this.hitLotto, this.bonusNumber);
    this.output.print(message.PRIZE_STAT);
    this.output.print(message.LINE);
    this.printStat();
    this.input.close();
  }

  printUserLottos() {
    this.user.calcLottoCount();
    this.user.lottos = LottoGenerator.generatedByCount(this.user.lottoCount);
    this.output.print(`${this.user.lottoCount}${message.BUY_AMOUNT}`);
    this.user.lottos.forEach((lotto) => {
      this.output.print(lotto.show());
    });
  }

  printStat() {
    this.printHitResult();
    this.output.print(message.returnOfInvestment(this.user.returnOfInvestment));
  }

  printHitResult() {
    for (let i = rank.FIFTH; i >= rank.FIRST; i--) {
      const { prize, isBonus, matchCount } = lottoRank[i];
      this.output.print(
        message.hitStat(matchCount, prize, this.user.hitRanks[i], isBonus)
      );
    }
  }
}

module.exports = App;
