const Player = require("./Player");

class App {
  play() {
    const player = new Player();
    player.buyTickets("a");
  }
}

module.exports = App;
