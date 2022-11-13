class LottoGame {
  user;
  winningNumbers;
  bonusNumber;

  constructor(user, winningNumbers, bonusNumber) {
    this.user = user;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  getGameResult() {
    const matchCount = this.user.lottos.map(lotto =>
      this.getMatchCount(lotto.numbers, this.winningNumbers.numbers, this.bonusNumber)
    );

    const fifth = matchCount.filter(([count]) => count === 3).length;
    const fourth = matchCount.filter(([count]) => count === 4).length;
    const third = matchCount.filter(([count]) => count === 5).length;
    const second = matchCount.filter(([count, bonusMatch]) => count === 5 && bonusMatch).length;
    const first = matchCount.filter(([count]) => count === 6).length;

    return { fifth, fourth, third, second, first };
  }

  getMatchCount(numbers, winningNumbers, bonusNumber) {
    const matchCount = numbers.filter(number => winningNumbers.includes(number) || number === bonusNumber).length;
    const bonusMatch = numbers.includes(bonusNumber);

    return [matchCount, bonusMatch];
  }
}

module.exports = LottoGame;
