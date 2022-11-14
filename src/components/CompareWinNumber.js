class compareWinNumber {
  winAndBonus(lotteries, winNumber, bonusNumber) {
    const results = [];
    lotteries.forEach((lotteries) => {
      results.push(this.countWinNumber({ lotteries, winNumber, bonusNumber }));
    });
    return results;
  }

  countWinNumber({ lotteries, winNumber, bonusNumber }) {
    let winCount = 0;
    let isBonus = false;
    winNumber.forEach((number) => {
      if (lotteries.getNumbers().includes(number)) winCount += 1;
    });
    if (winCount === 5) {
      isBonus = this.checkBonus(lotteries, bonusNumber);
    }
    return [winCount, isBonus];
  }

  checkBonus(lotteries, bonusNumber) {
    let isBonus = false;
    lotteries.getNumbers().forEach((number) => {
      if (number === bonusNumber) isBonus = true;
    });
    return isBonus;
  }
}

module.exports = compareWinNumber;
