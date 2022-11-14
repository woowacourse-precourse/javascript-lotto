const Random = require("./Random");
class makeLotto {
  #countLotto;
  #lottoNumbers = [];

  constructor(countLotto) {
    this.#countLotto = countLotto;
  }

  makeLotto() {
    let count = 0;
    while (count < this.#countLotto) {
      let lotto = this.makeLottoNumbers();
      this.#lottoNumbers.push(lotto);
      count++;
    }
  }
  makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

module.exports = makeLotto;
