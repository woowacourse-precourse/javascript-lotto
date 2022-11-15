class LottoMachine {
  compareInputWinNum(userLottoNumbers, winNumArr, bonusNum) {
    const result = [];
    userLottoNumbers.forEach((numbers) => {
      result.push(this.checkOne(numbers, winNumArr, bonusNum));
    });
    return this.getRank(result);
  }

  checkOne(numbers, winNumArr, bonusNum) {
    let winningCount = 0;
    let bonusCount = 0;
    numbers.forEach((number) => {
      if (winNumArr.includes(number)) {
        winningCount += 1;
        return;
      }
      if (number === bonusNum) {
        bonusCount += 1;
      }
    });
    return [winningCount, bonusCount];
  }

  getRank(counts) {
    const rank = Array.from({ length: 5 }, () => 0);

    counts.forEach(([winningCount, bonusCount]) => {
      if (winningCount === 6) rank[0] += 1;
      else if (winningCount === 5 && bonusCount === 1) rank[1] += 1;
      else if (winningCount === 5) rank[2] += 1;
      else if (winningCount === 4) rank[3] += 1;
      else if (winningCount === 3) rank[4] += 1;
    });

    return rank;
  }
}

module.exports = LottoMachine;
