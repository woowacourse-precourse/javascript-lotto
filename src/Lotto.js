const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers, myTickets) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.getBonusNumber(myTickets);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        '[ERROR] 로또 번호는 6개여야 합니다. 쉼표(,)로 구분해주세요.'
      );
    }

    if (isDuplicated(numbers)) {
      throw new Error('[ERROR] 중복된 번호가 없어야 합니다.');
    }

    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error('[ERROR] 다른 형식이 아닌 숫자만 입력해 주세요.');
      }

      if (!is1To45(number)) {
        throw new Error('[ERROR] 1부터 45 사이의 숫자만 입력해 주세요.');
      }
    });
  }

  getBonusNumber(myTickets) {
    Console.readLine('보너스 번호를 입력해 주세요.', (num) => {
      const bonusNumber = Number(num);
      if (isNaN(bonusNumber)) {
        throw new Error('[ERROR] 다른 형식이 아닌 숫자만 입력해 주세요.');
      }

      if (!is1To45(bonusNumber)) {
        throw new Error('[ERROR] 1부터 45 사이의 숫자만 입력해 주세요.');
      }

      if (this.isIncluded(bonusNumber)) {
        throw new Error('[ERROR] 로또 번호 6개와 다른 수를 입력해주세요');
      }

      const numberOfWonTicket = this.getNumberOfWonTicket(
        myTickets,
        this.#numbers,
        bonusNumber
      );

      Console.print(numberOfWonTicket);
    });
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

  isIncluded(num) {
    if (this.#numbers.includes(num)) {
      return true;
    }
    return false;
  }
}

const isDuplicated = (arr) => {
  const set = new Set(arr);
  if (set.size !== 6) {
    return true;
  }
  return false;
};

const is1To45 = (num) => {
  if (num >= 1 && num <= 45) {
    return true;
  }
  return false;
};

module.exports = Lotto;
