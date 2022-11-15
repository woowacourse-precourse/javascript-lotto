const { Random } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateLength(numbers);
    this.validateIsNumber(numbers);
    this.validateRange(numbers);
    this.validateRepeat(numbers);
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateIsNumber(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) throw new Error("[ERROR] 숫자를 입력해주세요.");
    });
  }

  validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45)
        throw new Error("[ERROR] 1부터 45 사이의 숫자를 입력해주세요.");
    });
  }

  validateRepeat(numbers) {
    if (numbers.length !== new Set(numbers).size)
      throw new Error("[ERROR] 서로 다른 숫자를 입력해주세요.");
  }

  getLottoNumber() {
    return this.#numbers;
  }

  calculateScore(winningLotto) {
    const winLotto = winningLotto.getLottoNumber();
    let score = 0;
    this.#numbers.forEach((lotto) => {
      if (winLotto.includes(lotto)) {
        score += 1;
      }
    });
    return score;
  }

  // TODO: 추가 기능 구현

  static createRandomLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);

    return new Lotto(numbers);
  }

  static createTotalLottoArr(lottoNum) {
    const lottoArr = [];
    for (let i = 0; i < lottoNum; i++) {
      lottoArr.push(Lotto.createRandomLotto());
    }
    return lottoArr;
  }
}

module.exports = Lotto;
