class CompareWithLotto {
  constructor() {
    this.userMoney;
    this.userNumbers;
    this.tickets;
  }

  compareWithNumbers(userNumbers, Lotterytickets, userMoney) {
    this.userMoney = userMoney;
    this.userNumbers = userNumbers;

    let index = Lotterytickets.length;
    while (index--) {
      Lotterytickets[index] = Lotterytickets[index].filter((num) =>
        userNumbers.includes(num)
      );
    }

    this.tickets = Lotterytickets.map((ticket) => (ticket = ticket.length));
  }
}

module.exports = CompareWithLotto;
