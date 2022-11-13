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

  // TODO: 추가 기능 구현
}

const getLottoNumber = (count) => {
  const numbers = [];
  for(let i = 0; i < count; i++) {
    numbers.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  // MissionUtils.Console.print(numbers);   
  return numbers;
}

const MissionUtils = require("@woowacourse/mission-utils");
getLottoNumber(3);
// const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
module.exports = Lotto;
