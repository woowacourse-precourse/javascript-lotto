const { Console } = require("@woowacourse/mission-utils");
const GenerateLotto = require('./GenerateLotto.js');
const Lotto = require('./Lotto.js');
const Winning = require('./Winning.js');

class App {
  generateLotto;
  lottoNumbers;
  validateNumber;
  userPay;
  play() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (money) => {
      this.userPay = money;
      this.generateLotto = new GenerateLotto(money);
      this.printPurchaseCount();
    });
  }

  printPurchaseCount() {
    const purchaseCount = this.generateLotto.purchaseCount();
    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
    this.printLottoNumber();
  }

  printLottoNumber() {
    this.lottoNumbers = this.generateLotto.setLottoNumber();
    this.lottoNumbers.forEach((lottoNumber) => {
      Console.print(lottoNumber);
    });
    this.userInputNumber();
  }

  userInputNumber() {
    Console.print('\n당첨 번호를 입력해 주세요.');
    Console.readLine('', (numbers) => {
      this.userNumbers = numbers.split(',').map((number) => Number(number));
      this.validateNumber = new Lotto(this.userNumbers);
      this.userInputBonusNumber();
    });
  }

  userInputBonusNumber() {
    Console.print('\n보너스 번호를 입력해 주세요.');
    Console.readLine('', (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);
      this.validateNumber.validateBonus(bonusNumber);
      this.getWinningStats();
    });
  }

  getWinningStats() {
    this.winning = new Winning(this.lottoNumbers, this.userNumbers, this.bonusNumber);
    this.winningResult = this.winning.result;
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.winningResult['5th']}개`);
    Console.print(`4개 일치 (50,000원) - ${this.winningResult['4th']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.winningResult['3rd']}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningResult['2nd']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.winningResult['1st']}개`);
    Console.close();
    this.getTotalReward();
  }

  getTotalReward() {
    const totalReward = this.winning.getTotalReward(this.winningResult);
    const percent = totalReward / this.userPay * 100;
    Console.print(`총 수익률은 ${percent}%입니다.`);
  }
}

// const app = new App();
// app.play();
module.exports = App;
