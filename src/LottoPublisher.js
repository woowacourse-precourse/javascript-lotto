class LottoPublisher {
  #winningNumbers = [];
  #bonusNumber;

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = LottoPublisher;
