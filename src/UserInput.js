const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');

const UserInput = {
  userInput: '',
  errorOutput: MESSAGE.INPUT_ERROR_MESSAGE,
  getInput() {
    MissionUtils.Console.readLine(
      MESSAGE.USER_BUY_MESSAGE,
      (userinputvalue) => {
        this.userInput = userinputvalue;
      }
    );
  },
  validate(inputStr) {
    if (!MESSAGE.CHECK_VALID_INPUT.test(inputStr)) {
      return false;
    }
    return true;
  },
  DivideByThousand(inputStr) {
    if (Number(inputStr) % MESSAGE.THOUSAND === 0) {
      return true;
    }
    return false;
  },
  isValidInput() {
    if (this.validate(this.userInput) === false) {
      return this.errorOutput;
    }
    if (this.DivideByThousand(this.userInput) === false) {
      return this.errorOutput;
    }
    return true;
  },
  numofLotts(inputStr) {
    return Number(inputStr) / MESSAGE.THOUSAND;
  },
};

module.exports = UserInput;
