const UserInputs = require('./UserInputs');

class App {
  constructor() {
    this.UserInputs = new UserInputs();
  }

  play() {
    this.UserInputs.getPrice()
  }
}

const app = new App();
app.play()

module.exports = App;
