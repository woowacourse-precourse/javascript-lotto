const MissionUtils = require("@woowacourse/mission-utils");

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
    this.#numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    // MissionUtils.Console.print(this.#numbers);
    let tempStr = "";
    for (let i = 0; i < this.#numbers.length; i++) {
      if (i === 0) {
        tempStr += "[";
        tempStr += this.#numbers[i];
        tempStr += ", ";
        continue;
      }
      if (i === this.#numbers.length - 1) {
        tempStr += this.#numbers[i];
        tempStr += "]";
        continue;
      }
      tempStr += this.#numbers[i];
      tempStr += ", ";
    }
    MissionUtils.Console.print(tempStr);
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
