const View = require("../view/View");
const UserNumber = require("../model/UserNumber");
const Lotto = require("../model/Lotto");

class Controller {
  constructor() {
    this.view = new View(this);
    this.userNumber = new UserNumber(this);
    this.lotto = new Lotto();
  }

  printReadOnlyMessage(type, data) {
    if (type === "userLottoArray") this.view.printUserLottoArray(data);
  }

  throwErrorWithMessage(type) {
    if (type === "purchasingAmountError") this.view.printPurchasingAmountErrorMessage();
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

  setWinningNumber(winningNumber) {
    this.lotto.setLottoNumbers(winningNumber);
  }

  init() {
    this.getPurchasingAmountFromUser();
  }
}

module.exports = Controller;
