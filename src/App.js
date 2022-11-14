const UserInterface = require('./UI/UserInterface');

class App {
  play() {
    const userInterface = new UserInterface();
    userInterface.inputMoney();
  }
}

const app = new App();
app.play();
module.exports = App;
