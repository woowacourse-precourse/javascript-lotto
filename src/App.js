const LottoGenerator = require('./LottoGenerator');
const CheckWinner = require('./CheckWinner');
const MissionUtils = require('@woowacourse/mission-utils');
const CheckVaild = require('./CheckVaild');
const Print = require('./Print');
const { INPUT_MESSAGES } = require('./common/message');
class App {
  constructor() {
    this.winningLotto = [];
    this.myLotto = [];
    this.bouns = 0;
    this.reward = 0;
  }
  getBuyLottoMoney() {
    let buyMoney = 0;
    const moneyInput = async (money) => {
      CheckVaild.isValidMoney(money);
      buyMoney = money;
      const lottoGenerator = new LottoGenerator(buyMoney / 1000);
      this.myLotto = lottoGenerator.getLottoNumber();
      Print.myLotto(this.myLotto);
      Print.countLotto(this.myLotto.length);
      this.winningNum();
    };
    MissionUtils.Console.readLine(
      `${INPUT_MESSAGES.INPUT_BUY_LOTTO}`,
      moneyInput
    );
  }

  winningNum() {
    MissionUtils.Console.readLine(
      `${INPUT_MESSAGES.INPUT_BUY_LOTTO}`,
      (winning) => {
        this.winningLotto = winning.split(',').map(Number);
        CheckVaild.isVaildWinningNumber(this.winningLotto);
        this.bonusNum();
      }
    );
  }
  bonusNum() {
    MissionUtils.Console.readLine(
      `${INPUT_MESSAGES.INPUT_WINNING_NUMBER}`,
      (bouns) => {
        this.bouns = parseInt(bouns);

        const count = new CheckWinner(
          this.winningLotto,
          this.bouns,
          this.myLotto
        );
        this.reward = count.getReward();
      }
    );
  }

  play() {
    this.getBuyLottoMoney();
  }
}
const app = new App();
app.play();
module.exports = App;
