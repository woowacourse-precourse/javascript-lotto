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
    this.buyMoney = 0;
  }

  startLotto() {
    const moneyInput = (money) => {
      CheckVaild.isValidMoney(money);
      this.buyMoney = money;
      this.generateLotto();
      this.printMyLotto();
      this.winningNum();
    };
    MissionUtils.Console.readLine(`${INPUT_MESSAGES.INPUT_BUY_LOTTO}`, moneyInput);
  }

  generateLotto() {
    const lottoGenerator = new LottoGenerator(this.buyMoney / 1000);
    this.myLotto = lottoGenerator.getLottoNumber();
  }

  printMyLotto() {
    Print.countLotto(this.myLotto.length);
    Print.myLotto(this.myLotto);
  }

  winningNum() {
    MissionUtils.Console.readLine(`${INPUT_MESSAGES.INPUT_WINNING_NUMBER}`, (winning) => {
      this.winningLotto = winning.split(',').map(Number);
      CheckVaild.isVaildWinningNumber(this.winningLotto);
      this.bonusNum();
    });
  }

  bonusNum() {
    MissionUtils.Console.readLine(`${INPUT_MESSAGES.INPUT_BOUNS_NUMBER}`, (bouns) => {
      this.bouns = parseInt(bouns);
      CheckVaild.isVaildBounsNumber(this.winningLotto, this.bouns);
      this.getResult();
    });
  }

  getResult() {
    const resultLotto = new CheckWinner(this.winningLotto, this.bouns, this.myLotto);
    const reward = resultLotto.getReward();
    const ranking = resultLotto.getRanking();
    Print.result(reward, ranking, this.buyMoney);
  }

  play() {
    this.startLotto();
  }
}

const app = new App();
app.play();
module.exports = App;
