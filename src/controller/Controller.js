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

  printReadOnlyMessage(type, data) {
    if (type === "userLottoArray") this.view.printUserLottoArray(data);
  }

  throwErrorWithMessage(type) {
    if (type === "purchasingAmountError") this.view.printPurchasingAmountErrorMessage();
    if (type === "winningNumberCommaNumberError") this.view.printWinningNumberCommaNumberErrorMessage();
    if (type === "winningNumberRangeError") this.view.printWinningNumberRangeErrorMessage();
    if (type === "winningNumberUniqueError") this.view.printWinningNumberUniqueErrorMessage();
    if (type === "bonusNumberError") this.view.printBonusNumberErrorMessage();
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

  setBonusNumberFromUser() {
    this.lotto.setBonusNumberFromUser();
  }

  getOverallInformationForStatistics() {
    return {
      winningNumber: this.lotto.getLottoNumbers(),
      bonusNumber: this.lotto.getBonusNumber(),
      userLottoArray: this.userNumber.getUserLottoArray(),
    };
  }

  init() {
    this.getPurchasingAmountFromUser();
  }
}

module.exports = Controller;
