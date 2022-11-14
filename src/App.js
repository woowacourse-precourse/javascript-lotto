const { Console, Random } = require('@woowacourse/mission-utils');

const Error = require('./components/Error');
const Bonus = require('./Bonus');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.money = 0;
    this.count = 0;
    this.winNumber = 0;
    this.bonusNumber = 0;
    this.lottoList = [];
    this.rank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  play() {
    this.error = new Error();
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine('구매금액을 입력해 주세요. \n', (money) => {
      if (this.error.isDividedByTen(money)) {
        this.money = money;
        this.getPurchaseCount();
        this.getLottoList();
      }
    });
  }

  getPurchaseCount() {
    const count = this.money / 1000;
    this.count = count;
    this.printPurchaseCount();
  }

  printPurchaseCount() {
    Console.print(`${this.count}개를 구매했습니다.`);
  }

  getLottoList() {
    let countIndex = 0;

    while (countIndex < this.count) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((a, b) => a - b);
      this.lottoList.push(lottoNumbers);
      countIndex++;
    }

    this.printLottoList();
  }

  printLottoList() {
    this.lottoList.forEach((lottoNumbers) => {
      Console.print(lottoNumbers);
    });

    this.inputWinNumber();  
  }

  inputWinNumber() {
    Console.readLine('당첨 번호를 입력해 주세요. \n', (numbers) => {
      const  winNumber = numbers.split(',').map(Number);
      new Lotto(winNumber);
      this.winNumber = winNumber;
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요. \n', (bonus) => {
      new Bonus(bonus, this.winNumber);
      this.bonusNumber = bonus;
      this.compare();
    });
  }

  compare() {
    this.lottoList.forEach((lotto) => {
      const matchingNumber = this.winNumber.filter((ele) => lotto.includes(ele));

      if (matchingNumber.length > 2) {
        this.getRank(matchingNumber, lotto);
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
