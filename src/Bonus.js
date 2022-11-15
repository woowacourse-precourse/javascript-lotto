class Bonus {
  #number;

  constructor(number) {
    this.rangeCheck(number);
    this.characterCheck(number);
    this.#number = number;
  }

  // 입력값이 범위 내에 있는지 검사
  rangeCheck(number) {
    if (number > 45 || number < 1) {
      throw new Error("[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.");
    }
  }

  // 입력값에 숫자가 아닌 것이 있는지 검사
  characterCheck(number) {
    if (typeof number != "number") {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  }

  matchBonus(game) {
    for (const item of game) {
      if (item === this.#number) {
        return 1;
      }
    }
    return 0;
  }
}

module.exports = Bonus;
