class Bonus {
  #number;

  constructor(number) {
    this.range(number);
    this.character(number);
    this.#number = number;
  }

  range(number) {
    if (number > 45 || number < 1) {
      throw new Error("[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.");
    }
  }

  character(number) {
    if (typeof number != "number") {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  }

  matchBonus(game){
    for(const item of game){
      if (item === this.#number){
        return 1;
      }
    }
    return 0;
  }
  
}

module.exports = Bonus;
