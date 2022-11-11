/**
 * 로또 클래스
 * 1. 사용자로 부터 입력 받은 당첨 번호의 유효성 검사를 수행
 * 2. 발행한 로또들과 당첨 번호 확인
 * 3. 결과 출력
 * 
 */

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
  
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    } 
    
    if(numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    
  }

  // TODO: 추가 기능 구현
  getResult(input, bonus) {
    console.log(`count hit ${this.countHit(input)}`);
    let hitCount = this.countHit(input);
    let prize = -1;

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


const temp = new Lotto([1,2,3,4,5,6]);
console.log(temp.getResult([1,2,3,4,5,7], 7));

module.exports = Lotto;
