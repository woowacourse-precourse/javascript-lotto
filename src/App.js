const MissionUtils = require("@woowacourse/mission-utils");

const {
  GAME_START_MESSAGE,
  PURCHACE_MESSAGE,
  REQUIRE_WIN_NUMBER_MESSAGE,
} = require("./constants/constant");
const LottoNumberGenerator = require("./domain/LottoNumberGenerator");
const MessageOutput = require("./domain/MessageOutput");
const UserInput = require("./domain/UserInput");
const State = require("./state/state");

class App {
  messageOutput = new MessageOutput();
  userInput = new UserInput();
  lottoNumberGenerator = new LottoNumberGenerator();
  state = new State();

  moneyInput(message) {
    MissionUtils.Console.readLine(message, (userInput) => {
      if (this.userInput.checkExceptCaseInMoney(userInput)) {
        this.state.setMoneyInput(userInput);
        return;
      }
      throw new Error("[ERROR] 에러 발생");
    });
  }

  // winNumbersInput(message) {
  //   MissionUtils.Console.readLine(message, (userInput) => {
  //     this.state.setWinNumbersInput(userInput);
  //   });
  // }

  play() {
    this.messageOutput.printMesage(GAME_START_MESSAGE);
    this.moneyInput("");
  }

  makePurchaceMessage(userBuyCount, message) {
    const messages = `${userBuyCount}${message}`;
    this.messageOutput.printMesage(messages);
  }
}

const app = new App();
app.play();

module.exports = App;
