const{ Random, Console } = require("@woowacourse/mission-utils");
const App = require("./App");

const START_LOTTO_NUMBER = 1;
const END_LOTTO_NUMBER = 45;
const LOTTO_LENGTH = 6;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) throw new Error(`[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`);
    this.validatLuckyNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  validatLuckyNumbers(numbers) {
    for(let idex = 0; idex < numbers.length; idex++){
      if(isNaN(numbers[idex]) || numbers.join("").charCodeAt(numbers[idex]) == 32) throw new Error ("[ERROR] 숫자만 입력해주세요.");
    }
    for(let idex of numbers) {
      if(idex > 45 || idex < 1) throw new Error(`[ERROR] 로또 번호는 ${START_LOTTO_NUMBER}부터 ${END_LOTTO_NUMBER}까지 입니다.`);
    }
    if(new Set(numbers).size !== LOTTO_LENGTH) throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  }
}

module.exports = Lotto;
