const MissionUtils = require("@woowacourse/mission-utils");
const STATIC = require("./Static");
const UserLotto = require("./UserLotto.js");
const Lotto = require("./Lotto.js");
const BonusNum = require("./BonusNum");

class LottoGame {
  money;
  gameCnt;
  userPickLotto;
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
      this.userPickLotto = this.createUserLotto();
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
      let str = "[";
      //   MissionUtils.Console.print(randLotto.toString());
      [...randLotto].map((e) => {
        str = str + e + ", ";
      });
      str = str.substring(0, str.length - 2) + "]";
      MissionUtils.Console.print(str);
      return randLotto;
    });
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
      startCheckResult(
        lotto,
        this.userPickLotto,
        bonusNumber,
        this.prizeList,
        this.userPrizeValue,
        this.money
      );
    });
  };
}

const startCheckResult = (
  lotto,
  userPickLottos,
  bonusNumber,
  prizeList,
  userPrizeValue,
  money
) => {
  userPickLottos.map((e) => {
    resultExceptBonus = checkResult(lotto, e, prizeList);
    prizeList.splice(resultExceptBonus, 1, prizeList[resultExceptBonus] + 1);
    checkBonusNum(e, bonusNumber, prizeList, resultExceptBonus);
  });
  announceResult(prizeList, userPrizeValue);
  userPrizeValue = calculateResult(prizeList);
  announceYield(money, userPrizeValue);
  MissionUtils.Console.close();
};

const checkResult = (lotto, userPickLottoNum) => {
  let correctCnt = 0;
  lotto.map((number) => {
    correctCnt += correctLottoNum(userPickLottoNum, number);
  });
  return correctCnt;
};

const correctLottoNum = (userPickLotto, number) => {
  if (userPickLotto.includes(parseInt(number))) {
    return 1;
  }
  return 0;
};

const checkBonusNum = (
  userPickLotto,
  bonusNumber,
  prizeList,
  resultExceptBonus
) => {
  if (resultExceptBonus == 5) {
    isInBonousNum(userPickLotto, bonusNumber, prizeList);
  }
};

const isInBonousNum = (userPickLotto, bonusNumber, prizeList) => {
  if (userPickLotto.includes(parseInt(bonusNumber))) {
    prizeList.splice(5, 1, prizeList[5] - 1);
    prizeList.splice(6, 1, prizeList[6] + 1);
  }
};

const announceResult = (prizeList) => {
  MissionUtils.Console.print(STATIC.MESSAGE.STATISTIC + "\n" + "---");
  MissionUtils.Console.print(
    `3${STATIC.MESSAGE.CORRECT} (${STATIC.LOTTERY_AMOUNT.THREE}) - ${prizeList[3]}개`
  );
  MissionUtils.Console.print(
    `4${STATIC.MESSAGE.CORRECT} (${STATIC.LOTTERY_AMOUNT.FOUR}) - ${prizeList[4]}개`
  );
  MissionUtils.Console.print(
    `5${STATIC.MESSAGE.CORRECT} (${STATIC.LOTTERY_AMOUNT.FIVE}) - ${prizeList[5]}개`
  );
  MissionUtils.Console.print(
    `5${STATIC.MESSAGE.CORRECT_BONUS}(${STATIC.LOTTERY_AMOUNT.FIVE_BONUS}) - ${prizeList[7]}개`
  );
  MissionUtils.Console.print(
    `6${STATIC.MESSAGE.CORRECT} (${STATIC.LOTTERY_AMOUNT.SIX}) - ${prizeList[6]}개`
  );
};

const calculateResult = (prizeList) => {
  return (
    calculatePrize(STATIC.LOTTERY_PRIZE.THREE, prizeList[3]) +
    calculatePrize(STATIC.LOTTERY_PRIZE.FOUR, prizeList[4]) +
    calculatePrize(STATIC.LOTTERY_PRIZE.FIVE, prizeList[5]) +
    calculatePrize(STATIC.LOTTERY_PRIZE.FIVE_BONUS, prizeList[7]) +
    calculatePrize(STATIC.LOTTERY_PRIZE.SIX, prizeList[6])
  );
};

const calculatePrize = (value, cnt) => {
  return value * cnt;
};

const announceYield = (money, userPrizeValue) => {
  console.log(money, userPrizeValue);
  MissionUtils.Console.print(
    `${STATIC.MESSAGE.YIELD}${(userPrizeValue / money) * 100}%입니다.`
  );
};

module.exports = LottoGame;
