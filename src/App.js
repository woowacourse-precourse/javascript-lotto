const { game } = require("./gameStart");

class App {
  play() {
    game.purchasedCostInput();
  }
}

const app = new App();

app.play();

module.exports = App;
