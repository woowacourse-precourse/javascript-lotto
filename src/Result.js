class Result {
  #userLottos;
  #winningNumber;
  #bonusNumber;
  #sameResultArray;

  constructor(userLottos, winningNumber, bonusNumber) {
    this.#userLottos = userLottos;
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#sameResultArray = new Array(5).fill(0);
    this.checkEachUserLottos();
  }

  checkEachUserLottos() {
    this.#userLottos.forEach((array) => {
      this.checkWinningNumber(array);
    });
  }

  checkWinningNumber(array) {
    const sum = array.reduce((acc, value) => {
      if (this.#winningNumber.includes(value)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    this.rankCount(sum);
  }
}

module.exports = Result;
