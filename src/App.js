const Io = require('./Io');
const { question } = require('./constants');
const User = require('./User');

class App {
  play() {
    Io.inputByUser(question.purchaseAmout, input => {
      const user = new User(input);
    });
  }
}

module.exports = App;
