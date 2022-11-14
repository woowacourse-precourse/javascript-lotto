const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  purchased(answer) {
    if (Number(answer) % 1000 !== 0) {
      throw new Error('[ERROR] 잔돈이 남지않게 1,000원 단위로 입력해주세요.');
    }
    let quantity = Number(answer) / 1000;
    const arr = [];
    this.print(`${quantity}개를 구매하셨습니다.`);
    while (quantity > 0) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.print(lotto);
      arr.push(lotto);
      quantity = quantity - 1;
    }
    return arr;
  }

  사용자번호선택(answer) {
    const split = answer.split(',');

    return split;
  }
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    //중복 숫자 있을때 예외처리
    // for (let i=0;i<split.length;i++) {
    //   if (split[i] < 1 || split[i] > 45) {
    //     throw new Error('[ERROR] 당첨 번호는 1~45 수를 입력해주세요.');
    //   }
    // }
    if (numbers.length === 6) {
      console.log('통과');
    }
  }

  process() {
    console.log(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  print(str) {
    return MissionUtils.Console.print(str);
  }
}

module.exports = Lotto;
