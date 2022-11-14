const { Console } = require('@woowacourse/mission-utils');
const ErrorHandler = require('./ErrorHandler');
const checker = new ErrorHandler();

class Lotto {
  #numbers;

  constructor(numbers, myTickets, purchaseAmount) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.getBonusNumber(myTickets, purchaseAmount);
  }

  validate(numbers) {
    checker.checkAnArray(numbers);
  }

  getBonusNumber(myTickets, purchaseAmount) {
    Console.readLine('보너스 번호를 입력해 주세요.', (num) => {
      const bonusNumber = Number(num);

      this.validateBonusNumber(bonusNumber);

      const numberOfWonTicket = this.getNumberOfWonTicket(
        myTickets,
        this.#numbers,
        bonusNumber
      );

      this.printSummary(this.getSummary(numberOfWonTicket));

      const earningsRate = this.calculateEarnings(
        this.getSummary(numberOfWonTicket),
        purchaseAmount
      );
      this.printEarningsRate(earningsRate);
    });
  }

  validateBonusNumber(num) {
    this.isIncluded(num);
    checker.checkANumber(num);
  }

  getNumberOfWonTicket(tickets, winningNums, bonusNumber) {
    const numberOfWonTicket = [];

    tickets.forEach((ticket) => {
      numberOfWonTicket.push(
        this.compareLotto(ticket, winningNums, bonusNumber)
      );
    });
    return numberOfWonTicket;
  }

  compareLotto(ticket, winningNums, bonusNumber) {
    const matchedNumbers = ticket.filter((myNumber) =>
      winningNums.includes(myNumber)
    );

    // 5개 맞히고 보너스 번호 맞혔다면(2등 당첨이면) 10을 더해서 반환
    if (matchedNumbers.length === 5 && ticket.includes(bonusNumber)) {
      return matchedNumbers.length + 10;
    }
    return matchedNumbers.length;
  }

  getSummary(arr) {
    const winList = new Array(5).fill(0);
    arr.forEach((value) => {
      if (value >= 3 && value <= 5) {
        winList[value - 3] += 1;
      }
      if (value === 6) {
        winList[4] += 1;
      }
      if (value > 6) {
        winList[3] += 1;
      }
    });

    return winList;
  }

  printSummary(arr) {
    const descriptionArr = [
      '3개 일치',
      '4개 일치',
      '5개 일치',
      '5개 일치, 보너스 볼 일치',
      '6개 일치',
    ];
    const prizeMoneyArr = [
      '5,000',
      '50,000',
      '1,500,000',
      '30,000,000',
      '2,000,000,000',
    ];

    arr.forEach((value, index) => {
      const script = `${descriptionArr[index]} (${prizeMoneyArr[index]}원) - ${value}개`;
      Console.print(script);
    });
  }

  calculateEarnings(wonCountArr, purchaseAmount) {
    let totalEarnings = 0;
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];

    wonCountArr.forEach((value, index) => {
      totalEarnings += prizeMoney[index] * value;
    });

    return Math.round((totalEarnings / purchaseAmount) * 100 * 10) / 10;
  }

  printEarningsRate(earningsRate) {
    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
    Console.close();
  }

  isIncluded(num) {
    if (this.#numbers.includes(num)) {
      throw new Error('[ERROR] 로또 번호 6개와 다른 수를 입력해주세요');
    }
  }
}

module.exports = Lotto;
