const Text = require("./Text");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.range(numbers);
    this.repeating(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  range(numbers) {
    numbers.forEach((lottos) => {
      var lottoNum = +lottos;
      if (lottoNum < 1 || lottoNum > 45) {
        throw new Error(`${Text.ERROR_TEXT.LIMIT}`);
      }
    });
  }

  repeating(numbers) {
    var lottoNumSet = new Set(numbers);
    lottoNum = [...lottoNumSet];

    if (lottoNum.length !== 6) {
      throw new Error(`${Text.ERROR_TEXT.REPEAT}`);
    }
  }
}

module.exports = Lotto;
