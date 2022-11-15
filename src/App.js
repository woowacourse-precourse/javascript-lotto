const GamePlay = require("./gamePlay");

class App {
  gameplay = new GamePlay();

  play() {
    this.gameplay.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
