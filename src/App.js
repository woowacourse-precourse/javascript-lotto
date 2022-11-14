const game = require("./game/game");

class App {
  play() {
    game.Start();
  }
}

const app = new App();
app.play();

module.exports = App;
