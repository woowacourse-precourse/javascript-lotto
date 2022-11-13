const View = require("../view/View");
const UserNumber = require("../model/UserNumber");

class Controller {
  constructor() {
    this.view = new View(this);
    this.userNumber = new UserNumber();
  }

  init() {
    this.view.getPurchasingAmountFromUser();
  }
}

module.exports = Controller;
