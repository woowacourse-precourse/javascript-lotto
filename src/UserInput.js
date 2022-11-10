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
    if (!Message.CHECKVALIDINPUT(inputStr)) {
      return false;
    }
    return true;
  },
};

module.exports = UserInput;
