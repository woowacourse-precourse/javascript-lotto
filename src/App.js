const { Console, Random } = require('@woowacourse/mission-utils');
const { VALIDATE_NUMBER, INPUT_QUESTION, PRINT_MESSAGE, PRIZE } = require('./utils/Constants'); 
const Bonus = require('./Bonus');
const Lotto = require('./Lotto');
const PurchaseAmount = require('./PurchaseAmount');

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
    Console.readLine(INPUT_QUESTION.money, (money) => {
      new PurchaseAmount(money);
      this.money = money;
      this.getPurchaseCount();
    });
  }

  getPurchaseCount() {
    const count = this.money / VALIDATE_NUMBER.moneyUnit;
    this.count = count;
    this.printPurchaseCount();
    this.getLottoList();
  }

  printPurchaseCount() {
    Console.print(PRINT_MESSAGE.count(this.count));
  }

  getLottoList() {
    let countIndex = 0;

    while (countIndex < this.count) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(VALIDATE_NUMBER.start, VALIDATE_NUMBER.end, VALIDATE_NUMBER.len);
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
    Console.readLine(INPUT_QUESTION.winNum, (numbers) => {
      const  winNumber = numbers.split(',').map(Number);
      new Lotto(winNumber);
      this.winNumber = winNumber;
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(INPUT_QUESTION.bonusNum, (bonus) => {
      new Bonus(Number(bonus), this.winNumber);
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

    this.printResult();
    this.getProfit();
  }

  getRank(matchingNumbers, lotto) {
    const {rank} = this;
    const matchCount = matchingNumbers.length;

    if (matchCount === 3) rank.fifth++;
    if (matchCount === 4) rank.fourth++;
    if (matchCount === 5 && !lotto.includes(this.bonusNumber)) rank.third++;
    if (matchCount === 5 && lotto.includes(this.bonusNumber)) rank.second++;
    if (matchCount === 6) rank.first++;
  }

  printResult() {
    const {rank} = this;
    Console.print(PRINT_MESSAGE.statistics);
    Console.print(PRINT_MESSAGE.matchThree(rank.fifth));
    Console.print(PRINT_MESSAGE.matchFour(rank.fourth));
    Console.print(PRINT_MESSAGE.matchFive(rank.third));
    Console.print(PRINT_MESSAGE.matchFiveBonus(rank.second));
    Console.print(PRINT_MESSAGE.matchSix(rank.first));
  }

  getProfit() {
    const {rank} = this;
    const totalPrize = 
      rank.fifth * PRIZE.fifth + 
      rank.fourth * PRIZE.fourth + 
      rank.third * PRIZE.third + 
      rank.second * PRIZE.second + 
      rank.first * PRIZE.first;
    const profitRate = ((totalPrize / this.money) * 100).toFixed(1);
    this.printProfit(profitRate);
  }

  printProfit(profitRate) {
    Console.print(PRINT_MESSAGE.profit(profitRate));
    this.close();
  }

  close() {
    Console.close();
  }
}

module.exports = App;

