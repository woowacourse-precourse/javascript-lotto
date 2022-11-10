const { Console } = require("@woowacourse/mission-utils");
const { PLACE_MESSAGE, PLACE_ARR, WINNING_PRICE } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateSizeIsSix(numbers);
    this.validateIsDuplicated(numbers);
  }
  validateIsDuplicated(numbers) {
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length) {
      Console.close();
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 포함되어 있습니다.");
    }
  }

  validateSizeIsSix(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getPlace(number, isBonus) {
    if (number === 6) return "first";
    if (number === 5 && isBonus) return "second";
    if (number === 5) return "third";
    if (number === 4) return "forth";
    if (number === 3) return "fifth";
    return "boom";
  }

  compareLottoNumber = (ticket, lottoBonusNumber) => {
    const includeNumbers = ticket.reduce((acc, cur) => {
      return acc + (this.#numbers.includes(cur) ? 1 : 0);
    }, 0);
    const isBonus = this.#numbers.includes(lottoBonusNumber);
    return this.getPlace(includeNumbers, isBonus);
  };

  printEachPlace(place, number) {
    Console.print(`${PLACE_MESSAGE[place]}${number}개`);
  }

  checkTicketsNumber = (tickets, lottoBonusNumber, winningTickets) => {
    tickets.forEach((ticket) => {
      const place = this.compareLottoNumber(ticket, lottoBonusNumber);
      winningTickets[place] += 1;
    });
  };

  calculateYield(winningTickets) {
    return PLACE_ARR.reduce((acc, place) => {
      return acc + winningTickets[place] * WINNING_PRICE[place];
    }, 0);
  }

  calculateYieldRate(winningTickets, budget) {
    const lottoYield = this.calculateYield(winningTickets);
    const yieldRate = Math.round((lottoYield / budget) * 1000) / 10;
    return yieldRate;
  }

  printWinningStat = (tickets, lottoBonusNumber, budget) => {
    console.log("당첨 통계");
    console.log("---");
    const winningTickets = {
      first: 0,
      second: 0,
      third: 0,
      forth: 0,
      fifth: 0,
      boom: 0,
    };
    this.checkTicketsNumber(tickets, lottoBonusNumber, winningTickets);
    PLACE_ARR.map((place) => this.printEachPlace(place, winningTickets[place]));
    const yieldRate = this.calculateYieldRate(winningTickets, budget);
    Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  };
}

module.exports = Lotto;
