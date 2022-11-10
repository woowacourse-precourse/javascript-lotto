const WConsole = require("./utils/WConsole");
const STRING = require("./utils/string");
const Payment = require("./Payment");

class Game {
  init() {
    const money = WConsole.readLine(STRING.INPUT_MSG.START_GAME);
    const payment = new Payment(money);
    const lotteryTicket = payment.buyLotteryTicket();
  }
}

module.exports = Game;
