const Lotto = require('./Lotto');
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor () { 
    // const lotto = new Lotto();
  }

  async play() {
    this.userInput();
    this.prizeInput();
  }

  userInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요. \n', async (userMoney) => {
      this.numberOfAvailablePurchase(userMoney);
      resolve();
    });     
  }

  prizeInput() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요. \n', (userMoney) => {
      MissionUtils.Console.print(userMoney.split(','));
    })
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

  makeRandomLotto() {
    const randomLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomLotto.sort((a,b) => a-b);
  }

  showLottoList(randomLotto) {
    randomLotto.forEach(element => {
      MissionUtils.Console.print(element);
    });
  }


  
}

module.exports = App;
