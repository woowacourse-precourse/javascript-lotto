const { Console } = require('@woowacourse/mission-utils');
const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');
const Bonus = require('./Bonus');

class App {
  play() {}
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.print('구매금액을 입력해 주세요.');
    Console.readLine('', (userInput) => {
      this.checkPurchaseAmount(userInput);
    });
  }

  checkPurchaseAmount(userInput) {
    if (userInput % 1000 !== 0) {
      throw '[ERROR] 1000원 단위로 금액을 입력하지 않았습니다.'
    }
    const numberOfPurchase = userInput / 1000;
    this.printNumberOfPurchase(numberOfPurchase);
    this.getLottoList(numberOfPurchase);
  }

  printNumberOfPurchase(number) {
    Console.print(`${number}개를 구매했습니다.`);
  }
  
  getLottoList(requestCount) {
    let lottoList = [];
    let countIndex = 0;

    while (countIndex < requestCount) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((a, b) => a - b);
      lottoList.push(lottoNumbers);
      countIndex++;
    }
    
    this.printLottoList(lottoList);
  }

  printLottoList(lottoList) {
    lottoList.forEach((lottoNumbers) => {
      Console.print(lottoNumbers);
    });
    
    this.getUserLottoNumbers();
  }

  getUserLottoNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요. \n', (userInput) => {
      const userInputArr = userInput.split(',');
      new Lotto(userInputArr);
      this.getUserBonusNumbers(userInputArr);
    });
  }

  getUserBonusNumbers(userLottoNumbers) {
    Console.readLine('보너스 번호를 입력해 주세요. \n', (userInput) => {
      new Bonus(userInput, userLottoNumbers);
    });
  }
}
const app = new App();
app.play();

module.exports = App;