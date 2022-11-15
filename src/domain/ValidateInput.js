const MissionUtils = require("@woowacourse/mission-utils");
const {
  PURCHACE_MESSAGE,
  ERROR,
  ERROR_MESSAGE_INPUT_MONEY,
} = require("../constants/constant");
const LottoNumberGenerator = require("./LottoNumberGenerator");
const MessageOutput = require("./MessageOutput");

class ValidateInput {
  #message;
  userLottoCount = 0;

  messageOutput = new MessageOutput();
  lottoNumberGenerator = new LottoNumberGenerator();

  constructor(message) {
    this.message = message;
  }

  checkExceptCaseInMoney(money) {
    const remains = money % 1000;
    if (remains > 0) {
      throw new Error(`${ERROR} ${ERROR_MESSAGE_INPUT_MONEY}`);
    }
    return true;
  }

  makeUserLottoNumbers(userLottoCount) {
    const userLottos = [];
    for (let lottoCount = 0; lottoCount < userLottoCount; lottoCount++) {
      userLottos.push(this.lottoNumberGenerator.createRandomNumbers());
    }
  }
}

module.exports = ValidateInput;
