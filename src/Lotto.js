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
  }

  matchNumbers(ticket){
    let match = 0;
    const ticketNumbers = ticket.getNumbers();
    ticketNumbers.forEach(ticketNumber => {
      this.#numbers.includes(ticketNumber) ? match++ : null
    })
    return match;
  }

}

module.exports = Lotto;