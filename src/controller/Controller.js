const { Console } = require("@woowacourse/mission-utils");
const View = require("../view/View");
const UserNumber = require("../model/UserNumber");
const Lotto = require("../model/Lotto");
const Statistics = require("../model/Statistics");

class Controller {
  constructor() {
    this.view = new View(this);
    this.userNumber = new UserNumber(this);
    this.statistics = new Statistics(this);
  }

  printIssuedLotto(issuedLotto) {
    this.view.printUserIssuedLotto(issuedLotto);
  }

  getPurchasingAmountFromUser() {
    this.view.getPurchasingAmountFromUser();
  }

  setPurchasingAmount(userPurchasingAmount) {
    this.userNumber.setPurchasingAmount(userPurchasingAmount);
  }

  getWinningNumberFromUser() {
    this.view.getWinningNumberFromUser();
  }

  setWinningNumberFromUser(userInput) {
    const userSplitInput = userInput.split(",").map(Number);
    const lotto = new Lotto(userSplitInput);
    this.setLottoToUse(lotto.getLottoNumbers());
    this.getBonusNumberFromUser();
  }

  setLottoToUse(lotto) {
    this.userNumber.setLottoToUse(lotto);
  }

  getBonusNumberFromUser() {
    this.view.getBonusNumberFromUser();
  }

  setBonusNumberFromUser(bonusNumber) {
    this.userNumber.setBonusNumber(Number(bonusNumber));
  }

  getOverallInformationForStatistics() {
    return {
      winningNumber: this.userNumber.getLottoToUse(),
      bonusNumber: this.userNumber.getBonusNumber(),
      userIssuedLotto: this.userNumber.getUserIssuedLotto(),
      purchasingAmount: this.userNumber.getPurchasingAmount(),
    };
  }

  getStatistics() {
    this.statistics.getStatistics();
  }

  printStatistics(ranks, rateOfReturn) {
    this.view.printStatistics(ranks, rateOfReturn);
  }

  finishGame() {
    Console.close();
  }

  init() {
    this.getPurchasingAmountFromUser();
  }
}

module.exports = Controller;
