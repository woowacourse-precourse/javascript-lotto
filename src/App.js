const Lotto = require("./Lotto");
const { GAME_MESSAGE } = require('./Constants');

class App {
  lotto = new Lotto();
  play() {
    this.lotto.getParchaseAmount(GAME_MESSAGE.parchaseAmount);
    
  }
}

let app = new App();
app.play();

console.log(1);

module.exports = App;
