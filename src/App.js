const Io = require('./Io');
const { QUESTION } = require('./constants');
const User = require('./User');

class App {
  play() {
    Io.inputByUser(QUESTION.purchaseAmout, input => {
      const user = new User(input);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
