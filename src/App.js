const GameController = require('./Controller/GameContoller');

class App {
  play() {
    const game = new GameController();
    game.play();
  }
}
module.exports = App;
