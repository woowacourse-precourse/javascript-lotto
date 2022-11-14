const { Console, Random } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
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

  getLottoScores() {}

  // TODO: 추가 기능 구현

  static creatRandomLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return new Lotto(numbers);
  }

  static createTotalLottoArr(lottoNum) {
    const lottoArr = [];
    for (let i = 0; i < lottoNum; i++) {
      lottoArr.push(Lotto.creatRandomLotto());
    }
    return lottoArr;
  }
}

module.exports = Lotto;
