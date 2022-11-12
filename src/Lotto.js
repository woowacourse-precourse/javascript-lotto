const Validation = require('./Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(input) {
  
    if(!Array.isArray(input)) return Validation.validate(input, this.#numbers);
    Validation.validate(input);
    
  }

  // TODO: 추가 기능 구현
  getResult(input, bonus) {
    let hitCount = this.countHit(input);
    let prize = 0;

    if(hitCount == 6) prize = 1;
    else if(hitCount == 5 && this.isHitBonus(input, bonus)) {
      // 5개를 맞추고 보너스를 맞췄을 때 -> 2등
      prize = 2;
    }
    else if(hitCount == 5) prize = 3;
    else if(hitCount == 4) prize = 4;
    else if(hitCount == 3) prize = 5;

    return prize;
  }

  countHit(input) {

    let hit = 0;

    input.map((digit, index) => {
      let idx = this.#numbers.indexOf(digit);

      if(idx !== -1) hit++;
    })

    return hit;
  }
  
  isHitBonus(input, bonus) {
    return input.includes(bonus);
  }

}

module.exports = Lotto;
