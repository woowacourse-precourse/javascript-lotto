const Lotto = require("./Lotto");
let lotto = new Lotto();
class App {
  play() {
    lotto.makeLottoNumbers();
  }
}

module.exports = App;
