const { Console, Random } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  // TODO: 추가 기능 구현

  creatRandomLotto() {
    this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.#numbers;
  }

  createTotalLottoArr(lottoNum) {
    const lottoArr = [];
    for (let i = 0; i < lottoNum; i++) {
      lottoArr.push(this.creatRandomLotto());
    }
    return lottoArr;
  }
}

module.exports = Lotto;
