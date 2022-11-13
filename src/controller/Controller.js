const View = require("../view/View");
const UserNumber = require("../model/UserNumber");
const Lotto = require("../model/Lotto");

class Controller {
  constructor() {
    this.view = new View(this);
    this.userNumber = new UserNumber(this);
    this.lotto = new Lotto();
  }

  printReadOnlyMessages(type, data) {
    if (type === "userLottoArray") this.view.printUserLottoArray(data);
    if (type === "purchasingAmountError") this.view.printPurchasingAmountErrorMessage();
  }

  setPurchasingAmount(userPurchasingAmount) {
    this.userNumber.setPurchasingAmount(userPurchasingAmount);
  }

  setWinningNumber(winningNumber) {
    this.lotto.setLottoNumbers(winningNumber);
  }

  init() {
    this.view.getPurchasingAmountFromUser();
  }
}

module.exports = Controller;
