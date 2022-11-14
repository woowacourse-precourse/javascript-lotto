const {
  GAME_START_MESSAGE,
  PURCHACE_MESSAGE,
} = require("./constants/constant");
const MessageOutput = require("./domain/MessageOutput");
const UserInput = require("./domain/UserInput");

class App {
  messageOutput = new MessageOutput();
  userInput = new UserInput();

  play() {
    this.messageOutput.printMesage(GAME_START_MESSAGE);
    this.userInput.moneyInput("");
  }

  makePurchaceMessage(userBuyCount, message) {
    const messages = `${userBuyCount}${message}`;
    this.messageOutput.printMesage(messages);
  }
}

const app = new App();
app.play();

module.exports = App;
