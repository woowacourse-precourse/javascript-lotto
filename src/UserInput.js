const MissionUtils = require('@woowacourse/mission-utils');
const Message = require('./MESSAGE');

const UserInput = {
  userInput: '',
  getInput() {
    MissionUtils.Console.readLine(Message.USERBUYMESSAGE, (userinputvalue) => {
      this.userInput = userinputvalue;
    });
  },
  validate(inputStr) {
    if (!Message.CHECKVALIDINPUT.test(inputStr)) {
      return false;
    }
    return true;
  },
  DivideByThousand(inputStr) {
    if (Number(inputStr) % Message.THOUSAND === 0) {
      return true;
    }
    return false;
  },
};

module.exports = UserInput;
