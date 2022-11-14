const Lotto = require("./Lotto");

class App {
  play() {
    const lotto = new Lotto([1,2,3,4,5,6]);
    lotto.buyLotto();
  }
}
module.exports = App;
