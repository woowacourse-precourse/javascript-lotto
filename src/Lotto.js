const WINNING_NUMBERS_ERROR_MESSAGE = "[ERROR] 당첨 번호는 6개의 숫자여야 합니다.";
const WINNING_NUMBERS_ERROR_MESSAGE2 = "[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.";
const WINNING_NUMBERS_ERROR_MESSAGE3 = "[ERROR] 당첨 번호는 중복되지 않아야 합니다.";
class Lotto {
  #numbers;
  

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (
      numbers
        .map((number) => parseInt(number))
        .some((number) => isNaN(number))
    ) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGE);
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGE2);
    }

    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGE3);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  matchNumbers(ticket) {
    let match = 0;
    const ticketNumbers = ticket.getNumbers();
    ticketNumbers.forEach((ticketNumber) => {
      if (this.#numbers.includes(ticketNumber)) {
        match++;
      }
    });
    return match;
  }
}

module.exports = Lotto;
