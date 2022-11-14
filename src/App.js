const Customer = require("./Customer");
const LottoCompany = require("./LottoCompany");
const LottoStore = require("./LottoStore");
class App {
  play() {
    const customer = new Customer();
    customer.payMoney();
  }
}

module.exports = App;
