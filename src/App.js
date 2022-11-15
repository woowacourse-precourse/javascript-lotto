const Play = require('./Lotto/Play');

class App {
  constructor() {
    this.play();
  }

  play() {
    new Play();
  }
}

module.exports = App;
a = new App();