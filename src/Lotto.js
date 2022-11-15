const{ Console } = require("@woowacourse/mission-utils");

const START_LOTTO_NUMBER = 1;
const END_LOTTO_NUMBER = 45;
const LOTTO_LENGTH = 6;
const SPACE_ASKII = 32;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateLength(numbers);
    this.validateTureNumbers(numbers);
    this.validateRange(numbers);
    this.validateOverlap(numbers);
  }

  validateLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      Console.close();
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`);
    }
  }

  validateTureNumbers(numbers) {
    for(let index = 0; index < numbers.length; index++) {
      let askiiNumbers = numbers.join("").charCodeAt(numbers[index]);
      if(isNaN(numbers[index]) || askiiNumbers === SPACE_ASKII) {
        Console.close();
        throw new Error ("[ERROR] 정확한 숫자를 입력해주세요.");
      }
    }
  }

  validateRange(numbers) {
    for(let index of numbers) {
      if(index == null) continue;
      if(index > END_LOTTO_NUMBER || index < START_LOTTO_NUMBER) {
        Console.close();
        throw new Error(`[ERROR] 로또 번호는 ${START_LOTTO_NUMBER}부터 ${END_LOTTO_NUMBER}까지 입니다.`);
      }
    }
  }

  validateOverlap(numbers) {
    if(new Set(numbers).size !== LOTTO_LENGTH && numbers[0] !== null) {
      Console.close();
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
}

module.exports = Lotto;
