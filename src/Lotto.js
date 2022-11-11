const { Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    // 문자열
    this.validate(numbers);
    this.#numbers = numbers;
    this.printMyLottery();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  printMyLottery() {
    Console.print(this.#numbers);
  }

  // 내 로또번호와 당첨번호를 통한 등수확인 메서드 (안에는 당첨번호 들어가도록)
  checkMyLotteryRank(answer) {
    const countResult = countCorrectNumber(this.#numbers, answer);
    // 정답 번호 개수에 따른 등수 리턴
    // 문자열로 반환.
    return '등수';
  }
}

module.exports = Lotto;
