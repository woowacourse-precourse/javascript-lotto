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
  constructor() {
    this.money = 0;
    this.gameCnt = 0;
    this.userEarn = 0;
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
      const lotto = new Lotto(number.split(","));
      this.inputBonusNum(lotto);
    });
  };

  inputBonusNum = (lotto) => {
    MissionUtils.Console.readLine(STATIC.MESSAGE.BONUS, (number) => {
      const bonusNumber = new BonusNum(number, lotto.getNumber()).bonusNum;
      startCheckResult(lotto, this.userPickLotto, bonusNumber);
    });
  };
}

const startCheckResult = (lotto, userPickLotto, bonusNumber) => {
  userPickLotto.map((e) => {
    checkResult(lotto, e, bonusNumber);
  });
  announceResult();
};

const checkResult = (lotto, userPickLotto, bonusNumber) => {};

const announceResult = () => {
  MissionUtils.Console.print(STATIC.MESSAGE.STATISTIC + "\n" + "---");
};

module.exports = LottoGame;
