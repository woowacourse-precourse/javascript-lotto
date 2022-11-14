const { LOTTO_NUMBER } = require("./utils/Constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get lottoNumber() {
    return this.#numbers;
  }

  validate(numbers) {
    this.validLength(numbers);
    this.validOverlap(numbers);
    this.validFormat(numbers);
    this.validRange(numbers);
  }

  validLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER.count) {
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_NUMBER.count}개여야 합니다.`);
    }
  }

  validOverlap(numbers) {
    const lottoNumbersSet = new Set(numbers);

    if (lottoNumbersSet.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에는 중복이 있을 수 없습니다.');
    }
  }

  validFormat(numbers) {
    const reg = /^[0-9]+$/;

    numbers.forEach((item) => {
      if (!reg.test(item)) {
        throw new Error('[ERROR] 로또 번호는 숫자만 입력할 수 있습니다.');
      }
    })
  }

  validRange(numbers) {
    numbers.forEach((item) => {
      if (item < LOTTO_NUMBER.minimum || LOTTO_NUMBER.maximum < item) {
        throw new Error(`[ERROR] 로또 숫자의 범위는 ${LOTTO_NUMBER.minimum}부터 ${LOTTO_NUMBER.maximum}까지 입니다.`);
      }
    })
  }
}

module.exports = Lotto;
