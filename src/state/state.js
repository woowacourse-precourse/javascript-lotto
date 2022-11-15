const {
  PURCHACE_MESSAGE,
  REQUIRE_WIN_NUMBER_MESSAGE,
} = require("../constants/constant");
const LottoNumberGenerator = require("../domain/LottoNumberGenerator");
const MessageOutput = require("../domain/MessageOutput");
const UserInput = require("../domain/UserInput");

const MissionUtils = require("@woowacourse/mission-utils");

class State {
  lottoInput = 0;
  winNumbers = [];
  moneyInput = 0;
  buyLottoCount = 0;
  buyLottoNumbers = [];

  messageOutput = new MessageOutput();
  lottoNumberGenerator = new LottoNumberGenerator();

  setLottoInput() {}

  setMoneyInput(userInput) {
    this.moneyInput = userInput;
    this.buyLottoCount = parseInt(userInput / 1000);
    this.messageOutput.printMesage(`${this.buyLottoCount}${PURCHACE_MESSAGE}`);
    this.pickuserLottos(this.buyLottoCount);
  }
  pickuserLottos(buyLottoCount) {
    const lottos = [];
    for (let count = 1; count <= buyLottoCount; count++) {
      const lotto = this.lottoNumberGenerator.createRandomNumbers();
      MissionUtils.Console.print(lotto);
      lottos.push(lotto);
    }
    this.buyLottoNumbers = lottos;
    this.callMessage(REQUIRE_WIN_NUMBER_MESSAGE);
  }

  callMessage(message) {
    this.messageOutput.printMesage(message);
    this.winNumbersInput("");
  }

  winNumbersInput(message) {
    MissionUtils.Console.readLine(message, (userInput) => {
      this.setWinNumbersInput(userInput);
    });
  }

  setWinNumbersInput(userInput) {
    this.splitNumber(userInput, ",");
  }
  splitNumber(number, flag) {
    const splited = number.split(flag);
  }
}

module.exports = State;
