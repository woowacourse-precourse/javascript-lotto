// 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
// 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
// else를 지양한다.
// 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
// 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
// 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.
// 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
// 단위 테스트 작성이 익숙하지 않다면 __tests__/LottoTest.js를 참고하여 학습한 후 테스트를 구현한다.
const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현

  setCheck(){
    // SET 으로 중복 제거
    const check = new Set(this.#numbers)
    if (check.size !== 6) {
      throw new Error("[ERROR] 중복값이 확인 되었습니다.")
    }
  }
  
}

module.exports = Lotto;
