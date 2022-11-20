const { Console } = require("@woowacourse/mission-utils");

const User = require("./User");
const LottoGenerator = require("./LottoGenerator");
const Reader = require("./Reader");

class App {
  user;
  lottoGenerator;
  constructor() {
    this.lottoList = [];
    this.winnerCondition = [];
    this.lottoGenerator = new LottoGenerator();
  }
  play() {
    this.purchaseLotto();
  }
  purchaseLotto() {
    User.purchaseLotto((expenditure, numberOfPurchase) => {
      this.expenditure = expenditure;
      this.lottoList = User.generateLotto(numberOfPurchase);
      User.showLottoList(this.lottoList);
      this.getWinnerNumbers();
    });
  }
  getWinnerNumbers() {
    LottoGenerator.getWinnerNumbers((winnerNumbers) => {
      this.winnerCondition.push(winnerNumbers);
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    LottoGenerator.getBonusNumber(this.winnerCondition[0], (bonusNumber) => {
      this.winnerCondition.push(bonusNumber);
      this.getPriceResult(this.winnerCondition);
    });
  }
  getPriceResult(winnerCondition) {
    Reader.comparisonOperator(this.expenditure, this.lottoList, this.winnerCondition);
    this.end();
  }
  end() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
