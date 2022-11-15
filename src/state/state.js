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

  bonusNumbersInput(message) {
    MissionUtils.Console.readLine(message, (userInput) => {
      this.setBonusNumbersInput(userInput);
    });
  }

  setBonusNumbersInput(userInput) {
    const number = parseInt(userInput);
    this.isValidate(number);
    this.isNotInWinNumbers(number);
  }
  isNotInWinNumbers(userInput) {
    if (!this.winNumbers.includes(userInput)) {
      console.log(`중복 아님`);
    }
  }
  isValidate(userInput) {
    return 0 < userInput <= 45 ? true : false;
  }

  setWinNumbersInput(userInput) {
    const splitedNumbers = this.splitNumber(userInput, ",");
    if (
      this.isNotNumberDuplicate(splitedNumbers) &&
      this.isValidateNumberRange([splitedNumbers])
    ) {
      this.winNumbers = splitedNumbers;
      this.messageOutput.printMesage("보너스 번호를 입력해 주세요");
      this.bonusNumbersInput("");
    }
  }
  splitNumber(number, flag) {
    return number.split(flag).map((item) => {
      return parseInt(item);
    });
  }
  isNotNumberDuplicate(numberArr) {
    const setNumberArr = new Set(numberArr);
    console.log(setNumberArr.size);
    return setNumberArr.size === 6 ? true : false;
  }

  isValidateNumberRange(numberArr) {
    let flag = true;
    numberArr.map((number) => {
      if (number <= 0 || number > 45) {
        flag = false;
        return;
      }
    });
    console.log(flag);
    return flag;
  }
}

module.exports = State;
