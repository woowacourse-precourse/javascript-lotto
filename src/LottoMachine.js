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
}

module.exports = LottoMachine;
