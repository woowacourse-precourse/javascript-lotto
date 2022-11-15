const CreateRandomLotto = require("./CreateRandomLotto");
const InputWinningNumber = require("./InputWinningNum");
const NumberCompare = require("./NumberCompare");
const UserInputNumber = require("./UserInputNumber");
const WinningHistory = require("./WinningHistory");

class App {
  constructor(){
    this.createRandomLotto = new CreateRandomLotto();
    this.inputWinnigNum = new InputWinningNumber();
    this.numbercompare = new NumberCompare();
    this.userInputNumber = new UserInputNumber();
    this.winningHistory = new WinningHistory();
    this.issuedRandomNum = [];
  }
  play() {
    this.issuedRandomNum = this.userInputNumber.userLottoPaymentAmount();
    this.inputWinnigNum.winningNumber();
    this.inputWinnigNum.bonusNumber();
    this.numbercompare.lottoResults(this.issuedRandomNum,this.inputWinnigNum.winningNum,this.inputWinnigNum.bonusNum);
    this.winningHistory.printLottoStats(this.numbercompare.lottoRanking, this.userInputNumber.issudLotto);
  }
}

module.exports = App;
