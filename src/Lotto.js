/**
 * 로또 클래스
 * 1. 사용자로 부터 입력 받은 당첨 번호의 유효성 검사를 수행
 * 2. 발행한 로또들과 당첨 번호 확인
 * 3. 결과 출력
 * 4. 
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

}

module.exports = Lotto;
