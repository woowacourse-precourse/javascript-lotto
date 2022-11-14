const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }
  
  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    this.validateOverlap(numbers);
  }

  validateOverlap(numbers) {
    if(new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }

  getRandomNumber() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b);
    this.validateLength(randomNumber);
    this.validateOverlap(randomNumber);

    return randomNumber;
  }
}

module.exports = Lotto;
