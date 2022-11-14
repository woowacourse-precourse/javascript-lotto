const{ Random, Console } = require("@woowacourse/mission-utils");
const App = require("./App");

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
    if (numbers.length !== LOTTO_LENGTH) {
      Console.close();
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`);
    }
    this.validateInputNumbers(numbers);
  }

  validateInputNumbers(numbers) {
    for(let index = 0; index < numbers.length; index++){
      if(isNaN(numbers[index]) || numbers.join("").charCodeAt(numbers[index]) == SPACE_ASKII) {
        Console.close();
        throw new Error ("[ERROR] 정확한 번호를 입력해주세요.");
      }
    }
    for(let index of numbers) {
      if(index == null) continue;
      if(index > END_LOTTO_NUMBER || index < START_LOTTO_NUMBER) {
        Console.close();
        throw new Error(`[ERROR] 로또 번호는 ${START_LOTTO_NUMBER}부터 ${END_LOTTO_NUMBER}까지 입니다.`);
      }
    }
    if(new Set(numbers).size !== LOTTO_LENGTH && numbers[0] !== null) {
      Console.close();
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  validateOverlap(luckyNumbers, answer){
    if(luckyNumbers.filter((v) => v == answer[5]).length > 0) {
      Console.close();
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
}

module.exports = Lotto;
