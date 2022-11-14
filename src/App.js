const UserInput = require('./UserInput');

class App {
  constructor() {
    this.userInput = new UserInput();
  }

  play() {
    this.userInput.play();
  }
}

const app = new App();
app.play();

module.exports = App;
