class WinningChecker {
  constructor(purchasedLottos, winningNumbers, bonusNumber) {
    this.purchasedLottos = purchasedLottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.countOfWinning = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
  }

  findCountOfWinning() {
    let array = [];
    this.purchasedLottos.forEach((lottoNumbers) => {
      let numbers = lottoNumbers.filter((number) =>
        this.winningNumbers.includes(number)
      );
      array.push(numbers);
    });

    this.purchasedLottos = [...array];
  }
}

module.exports = WinningChecker;
