const { Console, Random } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

class App {
  constructor() {
    this.lottoCount = 0;
    this.winningNumber = [];
    this.userLottoNumbers = [];
    this.bonusNumber = 0;
    this.prizeResult = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (money) => {
      Validator.throwErrorIfInValidMoney(money);
      this.lottoCount = money / 1000;
      this.issueLotto();
    });
  }

  issueLotto() {
    while (this.userLottoNumbers.length < this.lottoCount) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumbers.sort((a, b) => a - b);
      this.userLottoNumbers.push(randomNumbers);
    }
    this.reportUserData();
  }

  reportUserData() {
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
    this.userLottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
    this.getWinningNumber();
  }

  getWinningNumber() {
    Console.print('당첨 번호를 입력해 주세요.');
    Console.readLine('', (winningNumber) => {
      Validator.throwErrorIfInValidWinningNumber(winningNumber);
      this.winningNumber = winningNumber.split(',').map((num) => Number(num));
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.print('보너스 번호를 입력해 주세요.');
    Console.readLine('', (bonusNumber) => {
      Validator.throwErrorIfInValidBonusNumber(this.winningNumber, bonusNumber);
      this.bonusNumber = Number(bonusNumber);
      this.setPrizeResult();
    });
  }

  getSameNumberCount(lottoNumber) {
    return lottoNumber.filter((number) => this.winningNumber.includes(number))
      .length;
  }
}

const app = new App();
app.play();

module.exports = App;
