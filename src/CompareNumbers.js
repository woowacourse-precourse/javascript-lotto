class CompareWithLotto {
  constructor() {
    this.userMoney;
    this.userNumbers;
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
  }
}

module.exports = CompareWithLotto;
