const MissionUtils = require("@woowacourse/mission-utils");
const { PURCHACE_MESSAGE } = require("../constants/constant");
const State = require("../state/state");
const LottoNumberGenerator = require("./LottoNumberGenerator");
const MessageOutput = require("./MessageOutput");

class UserInput {
  #message;
  userLottoCount = 0;

  messageOutput = new MessageOutput();
  lottoNumberGenerator = new LottoNumberGenerator();
  state = new State();

  constructor(message) {
    this.message = message;
  }

  moneyInput(message) {
    MissionUtils.Console.readLine(message, (userInput) => {
      if (this.checkExceptCaseInMoney(userInput)) {
        this.state.setMoneyInput(userInput);
        return;
      }
      throw new Error("[ERROR] 에러 발생");
    });
  }

  checkExceptCaseInMoney(money) {
    const remains = money % 1000;
    return remains > 0 ? false : true;
  }
  makeUserLottoNumbers(userLottoCount) {
    const userLottos = [];
    for (let lottoCount = 0; lottoCount < userLottoCount; lottoCount++) {
      userLottos.push(this.lottoNumberGenerator.createRandomNumbers());
    }
    console.log(userLottos);
  }
}

module.exports = UserInput;
