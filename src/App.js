const Constant = require("./utils/Constant");
const MissionUtils = require("@woowacourse/mission-utils");
const Customer = require("./Customer");
class App {
  constructor() {}

  play() {
    this.customer = new Customer();
    this.customer.purchaseLotto();
  }
}

const app = new App();
app.play();
module.exports = App;
