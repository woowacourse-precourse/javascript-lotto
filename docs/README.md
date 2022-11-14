# 기능 목록

- 구입 금액 입력
  - test: 입력받은 문자는 숫자이다. [ERROR] 숫자를 입력하여 주십시오.
  - test: 1000으로 나누어 떨어지지 않는 경우 예외 발생 [ERROR] 1000 단위로 입력하여 주십시오.
- 구매
  - 티켓 구매
  - 구매내역 출력
- 당첨번호 입력
  - test: 입력받은 , 수량은 5개이다. [ERROR] 당첨 번호를 쉼표(,)로 구분해주세요.
  - test: ,을 이용하여 구분한 문자들은 숫자이다. [ERROR] 숫자를 ,로 구분하여 입력하여 주십시오.
  - test: 숫자들은 6개이다. [ERROR] 숫자 6개를 입력하여 주십시오.
  - test: 공백이 없어야한다 [ERROR] 공백없이 입력해주십시오
- 보너스 번호 입력
  - test: 입력받은 문자는 숫자이다. [ERROR] 숫자를 입력하여 주십시오.
  - test: 입력받은 문자는 1개이다. [ERROR] 1개만 입력하여 주십시오.
- 당첨 통계 결과 출력
- 수익률 결과 출력

# 삽질 한줄 (이것 저것 파보면서 알게 된점, 파봤던것 또 파지말자)

- 입구 컷 : 접근 제어(private)
  - js에서 private은 #을 변수이름 앞에 prefix로 붙여 나타낸다.
- object가 괜히 object겠어? : js의 여러 객체 지향
  - dictionary인 object가 정말 객체(class)였다.
- 참고자료
  - [private과 여러 객체 지향](https://cruella-de-vil.tistory.com/58)
- getter와 setter : 접근자 프로퍼티(accessor property)

  - object에 일반적인 key: value 쌍이 데이터 프로퍼티라면 접근자 프로퍼티도 object에 들어간다.
  - 참고자료
    - [get과 set 사용](https://ko.javascript.info/property-accessors)
    - [object 안에 getter와 setter](https://imkh.dev/js-properties/)

- 코드로 테스트

  ```
  class Lotto {
    #numbers;
    numbers;
    constructor(numbers) {
      this.validate(numbers);
      this.#numbers = numbers;
      this.numbers = numbers;
      numbers.pop();
    }

    validate(numbers) {
      if (numbers.length !== 6) {
        throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
      }
    }

    get numbers() {
      return this.#numbers;
    }

  ```

  1. this.#numbers = numbers 이후 numbers를 pop하더라도 #numbers도 pop이 되어 있는 상태
  2. this.numbers를 class 밖에서 호출하면 불러와지지만 this.#numbers는 불가능

# 이모저모

- 객체 지향 어떻게 하는지 몰랐던 어려움 -> java private 개념과 python class 문법을 보며 며칠 동안 공부
- Lotto는 입력하는 숫자가 들어가는지 랜덤넘버가 들어가는지 -> 테스트 코드에 유효성 검사가 있으니 입력하는 숫자로 판단
- callback 지옥 최선인가.. -> class 사이 동기적으로 변수를 공유할 방법은 없을까?
