const Lotto = require('./Lotto');
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor () { 
    // const lotto = new Lotto();
  }

  async play() {
    const user = await this.userInput();
    const prize = await this.prizeInput()
    const bonus = await this.bonusInput();
    this.isBonusInPrize(bonus, prize);
  }

  userInput() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine('구입금액을 입력해 주세요. \n', (userMoney) => {
        resolve(this.lottoPurchase(userMoney));
      })
    })    
  }

  prizeInput() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine('당첨 번호를 입력해 주세요. \n', (prizeNumber) => {
        const prizeNumberArray = prizeNumber.split(',');
        new Lotto(prizeNumberArray);
        resolve(prizeNumberArray);
      })
    })
    
  }

  bonusInput() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine('보너스 번호를 입력해 주세요. \n', (bonusNumber) => {
        if (parseInt(bonusNumber) < 1 || parseInt(bonusNumber) > 45) {
          throw new Error("[ERROR] 보너스 번호는 1 ~ 45사이의 번호여야 합니다.")
        }
        resolve(bonusNumber);
      })
    })
    
  }

  lottoPurchase(userMoney) {
    this.numberOfAvailablePurchase(userMoney);
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

  isBonusInPrize(bonus, prize) {
    if (prize.includes(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.")
    }
  }
}

const lto = new App();
lto.play();

module.exports = App;
