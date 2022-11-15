const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const Validation = require('./Validation');
const GenerateLotto = require('./GenerateLotto');
const Const = require('./Const');
class App {
  constructor() {
    this.lottoCount = null;
    this.lottos = [];
    this.hitLottoNumber = [];
    this.bonusNumber = null;
    this.rewards = [];
    this.winning = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };
  }
  play() {
    Console.readLine(Const.BUY_LOTTO_MESSAGE, price => {
      Validation.checkInputPrice(price);
      this.lottoCount = GenerateLotto.carculateLottoCount(price);
      GenerateLotto.printLottoCount(this.lottoCount);
      this.lottos = GenerateLotto.generateLottoNumber(this.lottoCount);
    });
    GenerateLotto.printLottoNumber(this.lottos);
    this.hitLottoNumber = HitLottoNumber.inputHitLottoNumber();
    this.bonusNumber = HitLottoNumber.inputBonusNumber();
  }

  countSameNumber(lotto, hitLottoNumber) {
    return lotto.filter(number => hitLottoNumber.includes(number)).length;
  }

  checkRewards(lottos, bonusNumber) {
    lottos.forEach(lotto => {
      let hitCount = this.countSameNumber(lotto, this.hitLottoNumber);
      this.rewards.push(hitCount);
    });

    this.rewards.forEach((value, index) => {
      if (value === 6) {
        this.winning.FIRST += 1;
      } else if (value === 5 && lottos[index].includes(bonusNumber)) {
        this.winning.SECOND += 1;
      } else if (value === 5) {
        this.winning.THIRD += 1;
      } else if (value === 4) {
        this.winning.FOURTH += 1;
      } else if (value === 3) {
        this.winning.FIFTH += 1;
      }
    });
  }
}

module.exports = App;
