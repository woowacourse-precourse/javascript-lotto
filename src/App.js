const GamePlay = require("./gamePlay");

class App {
  gameplay = new GamePlay();

  play() {
    this.gameplay.gameStart();
  }
}

module.exports = App;
