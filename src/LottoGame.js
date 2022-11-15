const MissionUtils = require("@woowacourse/mission-utils");
const STATIC = require("./Static");
const UserLotto = require("./UserLotto.js");
const Lotto = require("./Lotto.js");
const BonusNum = require("./BonusNum");

class LottoGame {
  money;
  gameCnt;
  userPickLottos;
  userPrizeValue;
  prizeList;

  constructor() {
    this.money = 0;
    this.gameCnt = 0;
    this.userPrizeValue = 0;
    this.prizeList = [0, 0, 0, 0, 0, 0, 0, 0];
  }

  buyLotto = () => {
    MissionUtils.Console.readLine(STATIC.MESSAGE.BUYMONEY, (money) => {
      this.buyMoneyError(money);
      this.money = money;
      this.gameCnt = money / 1000;
      MissionUtils.Console.print(this.gameCnt + STATIC.MESSAGE.BUYNUM);
      this.userPickLottos = this.createUserLotto();
      this.inputLottoNum();
    });
  };

  buyMoneyError = (money) => {
    if (money % 1000 != 0) {
      throw new Error(STATIC.MESSAGE.ERR_BUY);
    }
  };

  createUserLotto = () => {
    return [...Array(this.money / 1000).keys()].map(() => {
      const randLotto = new UserLotto().number;
      this.printUserLotto(randLotto);
      return randLotto;
    });
  };

  printUserLotto = (randLotto) => {
    let lottoStrForPrint = "[";
    [...randLotto].map((num) => {
      lottoStrForPrint = lottoStrForPrint + num + ", ";
    });
    lottoStrForPrint =
      lottoStrForPrint.substring(0, lottoStrForPrint.length - 2) + "]";
    MissionUtils.Console.print(lottoStrForPrint);
  };

  inputLottoNum = () => {
    MissionUtils.Console.readLine(STATIC.MESSAGE.LUCKY, (number) => {
      const lotto = new Lotto(number.split(",")).getNumber();
      this.inputBonusNum(lotto);
    });
  };

  inputBonusNum = (lotto) => {
    MissionUtils.Console.readLine(STATIC.MESSAGE.BONUS, (number) => {
      const bonusNumber = new BonusNum(number, lotto).bonusNum;
      this.startCheckResult(lotto, bonusNumber);
    });
  };

  startCheckResult = (lotto, bonusNumber) => {
    this.userPickLottos.map((userPickLotto) => {
      const resultExceptBonus = this.checkResult(lotto, userPickLotto);
      this.prizeList.splice(
        resultExceptBonus,
        1,
        this.prizeList[resultExceptBonus] + 1
      );
      this.checkBonusNum(userPickLotto, bonusNumber, resultExceptBonus);
    });
    this.announceResult();
    this.userPrizeValue = this.calculateResult();
    this.announceYield(this.money, this.userPrizeValue);
    MissionUtils.Console.close();
  };

  checkResult = (lotto, userPickLottoNum) => {
    let correctCnt = 0;
    lotto.map((number) => {
      correctCnt += this.correctLottoNum(userPickLottoNum, number);
    });
    return correctCnt;
  };

  correctLottoNum = (userPickLotto, number) => {
    if (userPickLotto.includes(parseInt(number))) {
      return 1;
    }
    return 0;
  };

  checkBonusNum = (userPickLotto, bonusNumber, resultExceptBonus) => {
    if (resultExceptBonus == 5) {
      this.isInBonousNum(userPickLotto, bonusNumber);
    }
  };

  isInBonousNum = (userPickLotto, bonusNumber) => {
    if (userPickLotto.includes(parseInt(bonusNumber))) {
      this.prizeList.splice(5, 1, this.prizeList[5] - 1);
      this.prizeList.splice(6, 1, this.prizeList[6] + 1);
    }
  };

  announceResult = () => {
    MissionUtils.Console.print(STATIC.MESSAGE.STATISTIC + "\n" + "---");
    MissionUtils.Console.print(
      `3${STATIC.MESSAGE.CORRECT} (${STATIC.LOTTERY_AMOUNT.THREE}) - ${this.prizeList[3]}개`
    );
    MissionUtils.Console.print(
      `4${STATIC.MESSAGE.CORRECT} (${STATIC.LOTTERY_AMOUNT.FOUR}) - ${this.prizeList[4]}개`
    );
    MissionUtils.Console.print(
      `5${STATIC.MESSAGE.CORRECT} (${STATIC.LOTTERY_AMOUNT.FIVE}) - ${this.prizeList[5]}개`
    );
    MissionUtils.Console.print(
      `5${STATIC.MESSAGE.CORRECT_BONUS}(${STATIC.LOTTERY_AMOUNT.FIVE_BONUS}) - ${this.prizeList[7]}개`
    );
    MissionUtils.Console.print(
      `6${STATIC.MESSAGE.CORRECT} (${STATIC.LOTTERY_AMOUNT.SIX}) - ${this.prizeList[6]}개`
    );
  };

  calculateResult = () => {
    return (
      this.calculatePrize(STATIC.LOTTERY_PRIZE.THREE, this.prizeList[3]) +
      this.calculatePrize(STATIC.LOTTERY_PRIZE.FOUR, this.prizeList[4]) +
      this.calculatePrize(STATIC.LOTTERY_PRIZE.FIVE, this.prizeList[5]) +
      this.calculatePrize(STATIC.LOTTERY_PRIZE.FIVE_BONUS, this.prizeList[7]) +
      this.calculatePrize(STATIC.LOTTERY_PRIZE.SIX, this.prizeList[6])
    );
  };

  calculatePrize = (value, cnt) => {
    return value * cnt;
  };

  announceYield = (money, userPrizeValue) => {
    MissionUtils.Console.print(
      `${STATIC.MESSAGE.YIELD}${((userPrizeValue / money) * 100).toFixed(
        1
      )}%입니다.`
    );
  };
}

module.exports = LottoGame;
