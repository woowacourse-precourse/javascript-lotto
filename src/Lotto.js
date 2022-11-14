/*
- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원

1. 사용자로부터 금액입력받기
2. 만약 금액 5처원 입력시 5개 로또 뽑기
3. 길이가 여섯인 배열 5개 랜덤 생성(당첨번호)
4. 당첨번호 입력받기 6번호 쉼표(,)로 숫자 구분
5. 보너스 번호 하나 입력받기
6. 당첨 통계 (includse) 포함되어있는지 확인
7. 통계 출력
*/

const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  purchased() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      //구입한 금액 입력받기
      //만약 숫자가 6개 이상이면 시작 1000원 한장 나눠지지 않으면 예외처리
      if (Number(answer) % 1000 !== 0) {
        throw new Error('[ERROR] 잔돈이 남지않게 1,000원 단위로 입력해주세요.');
      }
      let quantity = Number(answer) / 1000;
      const arr = [];
      this.print(`${quantity}개를 구매하셨습니다.`);
      while (quantity > 0) {
        const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        this.print(lotto);
        arr.push(lotto);
        quantity = quantity - 1;
      }

      return arr;
    });
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    //중복 숫자 있을때 예외처리
    if (numbers.length === 6) {
      console.log('통과');
    }
  }

  process() {
    console.log(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  print(str) {
    return MissionUtils.Console.print(str);
  }

  // TODO: 추가 기능 구현
}
const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

module.exports = Lotto;
