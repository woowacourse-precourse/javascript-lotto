const {
  GAME_START_MESSAGE,
  PURCHACE_MESSAGE,
} = require("./constants/constant");
const LottoNumberGenerator = require("./domain/LottoNumberGenerator");
const MessageOutput = require("./domain/MessageOutput");
const UserInput = require("./domain/UserInput");

class App {
  messageOutput = new MessageOutput();
  userInput = new UserInput();
  lottoNumberGenerator = new LottoNumberGenerator();

  play() {
    this.messageOutput.printMesage(GAME_START_MESSAGE);
    this.userInput.moneyInput("");
    // this.lottoNumberGenerator.createRandomNumbers();
  }

  makePurchaceMessage(userBuyCount, message) {
    const messages = `${userBuyCount}${message}`;
    this.messageOutput.printMesage(messages);
  }
}

const app = new App();
app.play();

module.exports = App;
