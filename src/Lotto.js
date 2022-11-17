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
        bonusNumber
      );
      const winList = this.getWinList(numberOfWonTicket);
      const earningsRate = this.calculateEarnings(winList, purchaseAmount);

      this.printSummary(winList, earningsRate);
    });
  }

  validateBonusNumber(num) {
    this.isIncluded(num);
    checker.checkANumber(num);
  }

  getNumberOfWonTicket(tickets, bonusNumber) {
    const numberOfWonTicket = [];

    tickets.forEach((ticket) => {
      numberOfWonTicket.push(this.compareLotto(ticket, bonusNumber));
    });
    return numberOfWonTicket;
  }

  compareLotto(ticket, bonusNumber) {
    const matchedNumbers = ticket.filter((myNumber) =>
      this.#numbers.includes(myNumber)
    );

    // 5개 맞히고 보너스 번호 맞혔다면(2등 당첨이면) 10을 더해서 반환
    if (matchedNumbers.length === 5 && ticket.includes(bonusNumber)) {
      return matchedNumbers.length + 10;
    }
    return matchedNumbers.length;
  }

  getWinList(arr) {
    const winList = [0, 0, 0, 0, 0];
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

  printWinList(arr) {
    const descriptionArr = ['3개', '4개', '5개', '5개 일치, 보너스 볼', '6개'];
    const prizeMoneyArr = ['5', '50', '1,500', '30,000', '2,000,000'];

    arr.forEach((value, index) => {
      const script = `${descriptionArr[index]} 일치 (${prizeMoneyArr[index]},000원) - ${value}개`;
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

  printSummary(arr, num) {
    this.printWinList(arr);
    this.printEarningsRate(num);
  }

  isIncluded(num) {
    if (this.#numbers.includes(num)) {
      throw new Error('[ERROR] 로또 번호 6개와 다른 수를 입력해주세요');
    }
  }
}

module.exports = Lotto;
