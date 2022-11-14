const Random = require("./Random");
class makeLotto {
  #countLotto;
  _lottoNumbers = [];

  constructor(countLotto) {
    this.#countLotto = countLotto;
  }

  get lottoNumbers() {
    return this._lottoNumbers;
  }

  makeLotto() {
    let count = 0;
    while (count < this.#countLotto) {
      let lotto = this.makeLottoNumbers();
      this._lottoNumbers.push(lotto);
      count++;
    }
  }
  makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

module.exports = makeLotto;
