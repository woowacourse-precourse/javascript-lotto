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

  numberOfAvailablePurchase(userMoney) {
    if (!(userMoney % 1000)) {
      let availablePurchaseNumber = parseInt(userMoney / 1000);
      MissionUtils.Console.print(`\n${availablePurchaseNumber}개를 구매했습니다.`);
      return this.buyRandomLotto(availablePurchaseNumber);
    }
    throw new Error(`[ERROR] 천원단위로 입력해주세요`);
  }

  buyRandomLotto(availablePurchaseNumber) {
    let randomLotto = [];
      while (availablePurchaseNumber > 0) {
        randomLotto.push(this.makeRandomLotto());
        availablePurchaseNumber--;
      }
      this.showLottoList(randomLotto);
      return randomLotto;
  }


  
}

module.exports = App;
