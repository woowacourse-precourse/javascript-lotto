const Customer = require("./Customer");
const LottoCompany = require("./LottoCompany");
const LottoStore = require("./LottoStore");
class App {
  play() {
    const customer = new Customer();
    customer.payMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
