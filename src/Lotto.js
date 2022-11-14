class Lotto {
  #numbers;

  //  총 당첨 번호 확인
  constructor(winningNumber) {
    this.#numbers = winningNumber;
    this.typeNumberValidate(this.#numbers);
    this.countValidate(this.#numbers);
    this.repeatValidate(this.#numbers);
    this.limitNumberValidate(this.#numbers);
  }

  typeNumberValidate(numbers) {
    numbers.map(x => {
      if (isNaN(x)) {
        throw new Error('[ERROR] 숫자를 입력해주세요.');
      }
    });
  }

  // 로또 번호 개수 확인
  countValidate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    return;
  }

  // 중복 번호 확인
  repeatValidate(numbers) {
    let removeRepeatArr = [];
    removeRepeatArr = [...new Set(numbers)];
    if (removeRepeatArr.length < 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    return;
  }

  // 로또 번호는 1~45 사이 숫자
  limitNumberValidate(numbers) {
    numbers.map(x => {
      if (x < 1 || x > 45) {
        throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
      }
    });
    return;
  }
}

module.exports = Lotto;
