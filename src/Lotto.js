const ERROR_LOTTO_SIZE_MESSAGE = "[ERROR] 로또 번호는 6개여야 합니다.";
const ERROR_LOTTO_IS_INT_MESSAGE = "[ERROR] 로또 번호는 자연수여야 합니다.";
const ERROR_LOTTO_OVERLAP_MESSAGE = "[ERROR] 로또 번호는 중복되는 숫자가 없어야 합니다.";
const ERROR_LOTTO_VALUE_MESSAGE = "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자입니다.";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkLottoSize(numbers);
    this.checkLottoIsInt(numbers);
    this.checkLottoOverlap(numbers);
    this.checkLottoValue(numbers);
  }

  checkLottoSize(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_LOTTO_SIZE_MESSAGE);
    }
  }

  checkLottoIsInt(numbers) {
    for(let i = 0; i < numbers.length; i++) {
      if(Number(numbers[i]) % 1 !== 0) {
        throw new Error(ERROR_LOTTO_IS_INT_MESSAGE);
      }
    }
  }

  checkLottoOverlap(numbers) {
    const lottoOverlap = new Map();
    for (let i = 0; i < numbers.length; i++) {
      if (!lottoOverlap.has(numbers[i])) {
        lottoOverlap.set(numbers[i], 1);
      }
      else {
        throw new Error(ERROR_LOTTO_OVERLAP_MESSAGE);
      }
    }
  }

  checkLottoValue(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i] < 1 || (45 < numbers[i])) {
        throw new Error(ERROR_LOTTO_VALUE_MESSAGE);
      }
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
