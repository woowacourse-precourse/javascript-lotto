const View = require("../view/View");
const UserNumber = require("../model/UserNumber");

class Controller {
  constructor () {
    this.view = new View(this);
    this.userNumber = new UserNumber(this);
  }

  setPurchasingAmount (userPurchasingAmount) {
    this.userNumber.setPurchasingAmount(userPurchasingAmount);
  }

  init () {
    this.view.getPurchasingAmountFromUser();
  }
}

module.exports = Controller;
