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
  }

  getRank(matchingNumbers, lotto) {
    const matchCount = matchingNumbers.length;
    if (matchCount === 3) this.rank.fifth++;
    if (matchCount === 4) this.rank.fourth++;
    if (matchCount === 5 && !lotto.includes(this.bonusNumber)) this.rank.third++;
    if (matchCount === 5 && lotto.includes(this.bonusNumber)) this.rank.second++;
    if (matchCount === 6) this.rank.first++;

    this.printResult();
    this.getProfit();
  }

  printResult() {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.rank.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.rank.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.rank.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.rank.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.rank.first}개`);
  }
  getProfit() {
    const rank = this.rank;
    const totalPrize = 
      rank.fifth * 5000 + 
      rank.fourth * 50000 + 
      rank.third * 1500000 + 
      rank.second * 30000000 + 
      rank.first * 2000000000;
    const profit = ((totalPrize / this.money) * 100).toFixed(1);
    this.printProfit(profit);
  }
  
  printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
    this.close();
  }

  close() {
    Console.close();
  }

}
const app = new App();
app.play();

module.exports = App;