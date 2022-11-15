const Game = require('./Game'); 

class App {
  constructor(){
    this.Game = new Game();
  }

  play() {
    this.Game.play();
  }
}
const app = new App();

app.play();

module.exports = App;
