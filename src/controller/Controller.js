const { Console } = require("@woowacourse/mission-utils");
const View = require("../view/View");
const UserNumber = require("../model/UserNumber");
const Lotto = require("../model/Lotto");
const Statistics = require("../model/Statistics");

class Controller {
  constructor() {
    this.view = new View(this);
    this.userNumber = new UserNumber(this);
    this.lotto = new Lotto(this);
    this.statistics = new Statistics(this);
  }

  printIssuedLotto(issuedLotto) {
    this.view.printUserLottoArray(issuedLotto);
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

  setWinningNumberFromUser(winningNumber) {
    this.lotto.setLottoNumbers(winningNumber);
  }

  getBonusNumberFromUser() {
    this.view.getBonusNumberFromUser();
  }

  setBonusNumberFromUser(bonusNumber) {
    this.lotto.setBonusNumberFromUser(bonusNumber);
  }

  getOverallInformationForStatistics() {
    return {
      winningNumber: this.lotto.getLottoNumbers(),
      bonusNumber: this.lotto.getBonusNumber(),
      userLottoArray: this.userNumber.getUserLottoArray(),
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
