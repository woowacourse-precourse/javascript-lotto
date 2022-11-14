const { Console, Random } = require('@woowacourse/mission-utils');
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
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine('구매금액을 입력해 주세요. \n', (money) => {
      if (this.isDividedByTen(money)) {
        this.money = money;
        this.getPurchaseCount();
      }
    });
  }

  isDividedByTen(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 금액을 입력하지 않았습니다.');
    }

    return true;
  }

  getPurchaseCount() {
    const count = this.money / 1000;
    this.count = count;
    this.printPurchaseCount();
    this.getLottoList();
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
      const matchingNumbers = this.winNumber.filter((ele) => lotto.includes(ele));

      if (matchingNumbers.length > 2) {
        this.getRank(matchingNumbers, lotto);
      }
    });
    console.log(this.rank);
  }

  getRank(matchingNumbers, lotto) {
    const matchCount = matchingNumbers.length;
    if (matchCount === 3) this.rank.fifth++;
    if (matchCount === 4) this.rank.fourth++;
    if (matchCount === 5 && !lotto.includes(this.bonusNumber)) this.rank.third++;
    if (matchCount === 5 && lotto.includes(this.bonusNumber)) this.rank.second++;
    if (matchCount === 6) this.rank.first++;
  }
}

const app = new App();
app.play();

module.exports = App;
