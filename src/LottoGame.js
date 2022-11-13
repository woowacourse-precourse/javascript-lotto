const MissionUtils = require("@woowacourse/mission-utils");
const STATIC = require("./Static");
const UserLotto = require("./UserLotto.js");
const Lotto = require("./Lotto.js");
const BonusNum = require("./BonusNum");

class LottoGame {
  money;
  gameCnt;
  userPickLotto;
  userEarn;
  prizeList;
  constructor() {
    this.money = 0;
    this.gameCnt = 0;
    this.userEarn = 0;
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
      MissionUtils.Console.print(randLotto);
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
      startCheckResult(lotto, this.userPickLotto, bonusNumber, this.prizeList);
    });
  };
}

const startCheckResult = (lotto, userPickLottos, bonusNumber, prizeList) => {
  userPickLottos.map((e) => {
    resultExceptBonus = checkResult(lotto, e, prizeList);
    prizeList.splice(resultExceptBonus, 1, prizeList[resultExceptBonus] + 1);
    checkBonusNum(e, bonusNumber, prizeList, resultExceptBonus);
  });

  announceResult(prizeList);
};

const checkResult = (lotto, userPickLottoNum, prizeList) => {
  let correctCnt = 0;
  lotto.map((number) => {
    correctCnt += correctLottoNum(userPickLottoNum, number);
  });
  return correctCnt;
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

const correctLottoNum = (userPickLotto, number) => {
  if (userPickLotto.includes(parseInt(number))) {
    return 1;
  }
  return 0;
};

const announceResult = (prizeList) => {
  MissionUtils.Console.print(STATIC.MESSAGE.STATISTIC + "\n" + "---");
  console.log(prizeList);
};

module.exports = LottoGame;

// 리스트에서 5인걸 봐
// 보너스가 맞으면 그거 빼고 보너스에 넣자
