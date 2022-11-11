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
}

module.exports = Result;
