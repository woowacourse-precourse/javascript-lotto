const GameGuide = require('./GameGuide');

const gameGuide = new GameGuide();

class PlayInfo {
  #amount;
  #generatedLotto;
  #winningNumbers;
  #bonusNumber;
  #winningStats;

  constructor() {
    this.#amount = null;
    this.#generatedLotto = null;
    this.#winningNumbers = null;
    this.#bonusNumber = null;
    this.#winningStats = null;
  }

  getAmount() {
    return this.#amount;
  }

  setAmount(amount) {
    this.#amount = amount;
  }

  getGeneratedLotto() {
    return this.#generatedLotto;
  }

  setGeneratedLotto(generatedLotto) {
    this.#generatedLotto = generatedLotto;

    gameGuide.printGeneratedLottoQuantity(this.#generatedLotto.length);
    gameGuide.printGeneratedLotto(this.#generatedLotto);
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  setWinningNumbers(numbers) {
    this.#winningNumbers = numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  getWinningStats() {
    return this.#winningStats;
  }

  setWinningStats(result) {
    this.#winningStats = result;
  }

  getLottoInfo() {
    return {
      generatedLotto: this.getGeneratedLotto(),
      winningNumbers: this.getWinningNumbers(),
      bonusNumber: this.getBonusNumber()
    };
  }
}

module.exports = PlayInfo;
