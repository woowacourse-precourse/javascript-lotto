class Comparator {
  compare(listOfNumbers, winningNumbers, bonusNumber) {
    let winningList = {
      three: 0,
      four: 0,
      five: 0,
      fivePlusBonus: 0,
      six: 0,
    };

    listOfNumbers.forEach((numbersOfLotto) => {
      let countWinningNumbers = 0;
      let countBonusNumbers = 0;
      numbersOfLotto.forEach((number) => {
        if (winningNumbers.includes(number)) {
          countWinningNumbers += 1;
        }
        if (bonusNumber === number) {
          countBonusNumbers = 1;
        }
      });

      if (countWinningNumbers === 3) {
        winningList.three += 1;
      }
      if (countWinningNumbers === 4) {
        winningList.four += 1;
      }
      if (countWinningNumbers === 5 && countBonusNumbers === 0) {
        winningList.five += 1;
      }
      if (countWinningNumbers === 5 && countBonusNumbers === 1) {
        winningList.fivePlusBonus += 1;
      }
      if (countWinningNumbers === 6) {
        winningList.six += 1;
      }
    });
    return winningList;
  }
}

module.exports = Comparator;
