const Utils = require('./Utils.js');
const Amount = require('./Amount.js');
const User = require('./User.js');
const { OUTPUT_COUNT_MESSAGE, INPUT_AMOUNT_MESSAGE } = require('./const.js');

class App {
  async play() {
    const amount = new Amount();
    await amount.setInputAmount(`${INPUT_AMOUNT_MESSAGE}\n`);

    const user = new User(amount.getAmount());
    const userNumbersList = user.getNumbersList();

    this.printUserNumberList(userNumbersList);
  }

  /**
   *
   * @param {number[][]} userNumbersList
   */
  printUserNumberList(userNumbersList) {
    Utils.print(`\n${userNumbersList.length} ${OUTPUT_COUNT_MESSAGE}`);
    userNumbersList.forEach((numbers) => Utils.print(numbers));
  }
}

const app = new App();
app.play();

module.exports = App;
