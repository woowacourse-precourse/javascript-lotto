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
    let random = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    let strRandom = "[" + random.join(", ") + "]";
    return strRandom;
  }

  makeArrayAgain(stringArray) {
    let arr = [];
    stringArray.forEach((string) => {
      let onluNumber = string.slice(0, -1).slice(1);
      let arrOnlyNumber = onluNumber.split(",").map((str) => {
        let trimStr = str.trim();
        let numberRegex = /^[0-9]*$/;
        if (numberRegex.test(trimStr)) {
          return +trimStr;
        }
      });
      arr.push(arrOnlyNumber);
    });
    return arr;
  }
}

module.exports = makeLotto;
