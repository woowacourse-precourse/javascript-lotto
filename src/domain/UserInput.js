const MissionUtils = require("@woowacourse/mission-utils");
const { PURCHACE_MESSAGE } = require("../constants/constant");
const LottoNumberGenerator = require("./LottoNumberGenerator");
const MessageOutput = require("./MessageOutput");

class UserInput {
  #message;
  userLottoCount = 0;

  messageOutput = new MessageOutput();
  lottoNumberGenerator = new LottoNumberGenerator();

  constructor(message) {
    this.message = message;
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
  }
}

module.exports = UserInput;
