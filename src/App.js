const Numbers = require('./Numbers');

class App {
  play() {
    const n = new Numbers();
    n.inputMoney();
  }
}

const a = new App();
a.play();
module.exports = App;
