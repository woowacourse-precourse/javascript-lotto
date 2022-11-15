const MissionUtils = require("@woowacourse/mission-utils");

const {
  GAME_START_MESSAGE,
  PURCHACE_MESSAGE,
  REQUIRE_WIN_NUMBER_MESSAGE,
  ERROR,
  ERROR_MESSAGE_INPUT_MONEY,
} = require("./constants/constant");
const LottoNumberGenerator = require("./domain/LottoNumberGenerator");
const MessageOutput = require("./domain/MessageOutput");
const UserInput = require("./domain/UserInput");
const GamePlay = require("./gamePlay");

class App {
  messageOutput = new MessageOutput();
  userInput = new UserInput();
  lottoNumberGenerator = new LottoNumberGenerator();
  gameplay = new GamePlay();

  moneyInput(message) {
    MissionUtils.Console.readLine(message, (userInput) => {
      if (this.userInput.checkExceptCaseInMoney(userInput)) {
        this.gameplay.setMoneyInput(userInput);
        return;
      }
      throw new Error(`${ERROR} ${ERROR_MESSAGE_INPUT_MONEY}`);
    });
  }

  play() {
    this.moneyInput(GAME_START_MESSAGE);
  }

  makePurchaceMessage(userBuyCount, message) {
    const messages = `${userBuyCount}${message}`;
    this.messageOutput.printMessage("");
    this.messageOutput.printMessage(messages);
  }
}

const app = new App();
app.play();

module.exports = App;
