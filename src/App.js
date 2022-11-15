const OutputUI = require('./ui/OutputUI');
const InputUI = require('./ui/InputUI');
const message = require('./util/message');
const User = require('./User');
const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');
const rank = require('./util/rank');
const lottoRank = require('./util/lottoRank');
const Vaildator = require('./Vaildator');
const TypeConverter = require('./util/TypeConverter');

class App {
  constructor() {
    this.input = new InputUI();
    this.output = new OutputUI();
    this.user = new User();
    this.hitLotto;
    this.bonusNumber;
  }

  play() {
    this.input.readLine(this.handleBuyAmount.bind(this));
  }

  handleBuyAmount(amount) {
    amount = +amount;
    if (!Vaildator.isRightAmount(+amount)) {
      throw new Error('[ERROR]');
    }
    this.user.amount = +amount;
    this.printUserLottos();
    this.input.readLine(this.handleHitLottos.bind(this));
  }

  handleHitLottos(hitLottos) {
    hitLottos = TypeConverter.stringToArray(hitLottos, ',').map((e) => +e);
    if (!Vaildator.isRightLottoNumbers(hitLottos)) {
      throw new Error('[ERROR]');
    }
    this.hitLotto = new Lotto(hitLottos);
    this.input.readLine(this.handleBonusNumber.bind(this));
  }

  handleBonusNumber(number) {
    number = TypeConverter.stringToNumber(number);
    if (
      !Vaildator.isRightLottoNumber(number) ||
      Vaildator.isDuplicateNumberInArray(this.hitLotto.getNumbers(), number)
    ) {
      throw new Error('[ERROR]');
    }
    this.bonusNumber = number;
    this.showStat();
  }

  showStat() {
    this.user.calculateStat(this.hitLotto, this.bonusNumber);
    this.printStat();
    this.input.close();
  }

  printUserLottos() {
    this.user.calculateLottoCount();
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
