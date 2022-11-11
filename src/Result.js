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

  rankCount(sum) {
    if (sum === 3) {
      this.#sameResultArray[0] += 1;
    }
    if (sum === 4) {
      this.#sameResultArray[1] += 1;
    }
    if (sum === 5) {
      this.checkBonus();
    }
    if (sum === 6) {
      this.#sameResultArray[4] += 1;
    }
    return;
  }

  checkBonus() {
    if (this.#winningNumber.includes(this.#bonusNumber)) {
      this.#sameResultArray[3] += 1;
      return;
    }
    this.#sameResultArray[2] += 1;
  }

  getWinningResult() {
    return this.#sameResultArray;
  }
}

module.exports = Result;
