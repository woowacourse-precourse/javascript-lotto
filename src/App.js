const Lotto = require('./Lotto');
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor () { 
    // const lotto = new Lotto();
  }

  async play() {}

  userInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요. \n', async (userMoney) => {
      this.numberOfAvailablePurchase(userMoney);
      resolve();
    });     
  }

  
}

module.exports = App;
