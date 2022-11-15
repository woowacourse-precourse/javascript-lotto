const {
  PURCHACE_MESSAGE,
  REQUIRE_WIN_NUMBER_MESSAGE,
  RESULT_RANK,
  THIRD,
  FORTH,
  FIFTH,
  FIFTHBONUS,
  SIX,
  ERROR,
  ERROR_MESSAGE_ONLY_NUMBER,
  ERROR_MESSAGE_DUPLICATED_NUMBER,
  WON,
  COUNT,
  REQUIRE_BONUS_NUMBER_MESSAGE,
  MIN_LOTTO_VALUE,
  MAX_LOTTO_VALUE,
  ERROR_MESSAGE_BETWEEN_ONE_TO_FORTYFIVE,
  GAME_START_MESSAGE,
} = require("./constants/constant");
const LottoNumberGenerator = require("./domain/LottoNumberGenerator");
const MessageOutput = require("./domain/MessageOutput");
const ValidateInput = require("./domain/ValidateInput");
const Compare = require("./domain/Compare");

const MissionUtils = require("@woowacourse/mission-utils");
const Calculator = require("./domain/Calculator");
const Lotto = require("./Lotto");
const { ONLY_NUMBER } = require("./utils/validator");
const BackLogic = require("./utils/BackLogic");

class gamePlay {
  winNumbers = [];
  bonusNumber = 0;

  moneyInput = 0;
  lottomoneyOutput = 0;

  buyLottoCount = 0;
  buyLottoNumbers = [];

  validateInput = new ValidateInput();
  messageOutput = new MessageOutput();
  lottoNumberGenerator = new LottoNumberGenerator();
  calculator = new Calculator();
  compare = new Compare();
  backLogic = new BackLogic();

  gameStart() {
    this.registMoney(GAME_START_MESSAGE);
  }

  registMoney(message) {
    MissionUtils.Console.readLine(message, (userInput) => {
      if (this.validateInput.checkExceptCaseInMoney(userInput)) {
        this.setMoneyInput(userInput);
        return;
      }
      throw new Error(`${ERROR} ${ERROR_MESSAGE_INPUT_MONEY}`);
    });
  }

  setMoneyInput(userInput) {
    if (!ONLY_NUMBER.test(userInput)) {
      throw new Error(`${ERROR} ${ERROR_MESSAGE_ONLY_NUMBER}`);
    }
    this.moneyInput = userInput;
    this.buyLottoCount = parseInt(userInput / 1000);
    this.messageOutput.printMessage(`${this.buyLottoCount}${PURCHACE_MESSAGE}`);
    this.setUserLottos();
  }

  setUserLottos() {
    const lottos = [];
    for (let count = 1; count <= this.buyLottoCount; count++) {
      const lotto = this.lottoNumberGenerator.createRandomNumbers();
      this.messageOutput.makeUserLottoMessage(lotto);
      lottos.push(lotto);
    }
    this.buyLottoNumbers = lottos;
    this.winNumbersInput(REQUIRE_WIN_NUMBER_MESSAGE);
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
    if (this.isValidateRange(number) && this.isNotInWinNumbers(number)) {
      this.bonusNumber = number;
      const resultArray = this.compare.setResult(
        this.buyLottoNumbers,
        this.winNumbers,
        this.bonusNumber
      );
      this.makeResultMessage();
      return;
    }
    throw new Error(`${ERROR} ${ERROR_MESSAGE_DUPLICATED_NUMBER}`);
  }

  makeResultMessage() {
    const messageArr = [THIRD, FORTH, FIFTH, FIFTHBONUS, SIX];

    messageArr.map((arr) => {
      const { condition, price, count } = arr;
      this.messageOutput.makeUserResultMessage(condition, price, count);
      this.lottomoneyOutput += this.calculator.plusLottoMoney(count, price);
    });
    const resultReturnMoney = this.calculator.calcReturnMoney(
      this.lottomoneyOutput,
      this.moneyInput
    );
    this.messageOutput.makeFinalReturnMoney(resultReturnMoney);
  }

  isNotInWinNumbers(userInput) {
    if (!this.winNumbers.includes(userInput)) {
      return true;
    }
    throw new Error(`${ERROR} ${ERROR_MESSAGE_DUPLICATED_NUMBER}`);
  }

  isValidateRange(userInput) {
    if (0 < userInput <= 45) {
      return true;
    }
    throw new Error(`${ERROR} ${ERROR_MESSAGE_BETWEEN_ONE_TO_FORTYFIVE}`);
  }

  setWinNumbersInput(userInput) {
    const splitedNumbers = this.backLogic.splitNumber(userInput, ",");

    new Lotto(splitedNumbers);
    this.winNumbers = splitedNumbers;
    this.bonusNumbersInput(REQUIRE_BONUS_NUMBER_MESSAGE);
  }
}

module.exports = gamePlay;
