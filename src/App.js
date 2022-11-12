const Amount = require('./Amount.js');
const User = require('./User.js');

class App {
  async play() {
    const amount = new Amount();
    await amount.setInputAmount();

    const user = new User(amount.getAmount());
    const userNumbersList = user.getNumbersList();

    console.log(userNumbersList);
  }
}

const app = new App();
app.play();

module.exports = App;
