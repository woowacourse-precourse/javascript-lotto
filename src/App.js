const User = require('./User');
const Lotto = require('./Lotto');
class App {
  play() {
    const user = new User();
    user.input_amount();
  }
}

module.exports = App;
