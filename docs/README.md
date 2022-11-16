# 설명

```
입력한 금액 만큼 로또를 구입하고
당첨번호와 보너스 당첨번호를 입력해 넣으면
당첨내역과 수익률을 출력합니다.
```

# 사용법

[code runner 설치](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

```
node "YOUR_PATH/javascript-lotto/src/App.js"
```

# 기능 목록

- 구입 금액 입력(App.js)
- 구매(TicketBox.js)
  - 구입금액 유효성 검사 (validate)
    - test: 입력받은 문자는 숫자이다. [ERROR] 숫자를 입력하여 주십시오.
    - test: 1000으로 나누어 떨어지지 않는 경우 예외 발생 [ERROR] 1000 단위로 입력하여 주십시오.
  - 티켓 구매(makeTickets)
  - 구매내역 출력(printTickets)
  - 당첨번호 입력 당시 유효성 검사(lottoValidate - 정해진 테스트 케이스 때문에 바깥에서 검사)
    - test: 입력받은 , 수량은 5개이다. [ERROR] 당첨 번호를 쉼표(,)로 구분해주세요.
    - test: ,을 이용하여 구분한 문자들은 숫자이다. [ERROR] 숫자를 ,로 구분하여 입력하여 주십시오.
    - test: 공백이 없어야한다 [ERROR] 공백없이 입력해주십시오
- 당첨번호(Lotto.js)
  - class 내에서 array일때 유효성 검사 (validate)
    - test: 숫자들은 6개이다. [ERROR] 숫자 6개를 입력하여 주십시오.
    - test: 숫자들은 중복이 없다. [ERROR] 숫자를 중복없이 입력하여 주십시오.
    - test: 숫자 범위는 1-45까지이다. [ERROR] 1-45 사이 숫자를 입력하여 주십시오.
- 보너스 번호(Bonus.js)
  - 유효성 검사 (validate)
    - test: 보너스 번호는 반드시 1개는 있어야 합니다. [ERROR] 1개만 입력하여 주십시오.
    - test: 입력받은 문자는 숫자이다. [ERROR] 숫자를 입력하여 주십시오.
    - test: 입력받은 문자는 1-45 사이 숫자이다. [ERROR] 1-45 사이 숫자를 입력하여 주십시오.
    - test: 보너스 번호는 당첨 번호와 중복되지 않는다. [ERROR] [ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.
- 당첨 통계 (BillBoard.js)
  - 각 등수별로 인스턴스 생성 (Counter.js)
  - 각 로또 번호 비교 (match)
  - 각 등수별로 당첨된 복권 수 집계(countByInstance)
  - 각 등수별로 당첨된 복권 수 출력(printStatics)
  - 수익률 결과
    - 당첨금 총합 출력(getTotalWinnings)
    - 수익률 출력(printRateOfReturn)
- 각 등수 클래스 (Counter.js)
  - 해당 등수 인스턴스의 당첨금(WinningsByCount)
  - 해당 등수 인스턴스의 당첨된 복권 수 증가(increaseCount)

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

# 코드 링크

[COME ON BRO - PULL REQUEST](https://github.com/woowacourse-precourse/javascript-lotto/pull/364)

# Hello?

안녕하세요? 이번 주차는 객체지향이라는 개념을 공부하기에도 급급했습니다. 다들 안녕하시죠,...?

이전에는 소극적으로 다른 분들 리뷰를 보곤 했는데 조금씩 적극적으로 리뷰도 남기고 이제 리뷰 요청까지 드리게 되었네요.

매 주차마다 제가 부족한 부분을 채울 수 있는 기회 피어리뷰!

제 피어리뷰 해주시는 분들은 다음 주차 테스트 케이스 한방에 통과하실 겁니다!

제가 미리 남겨놓은 리뷰도 있는데 살포시 이모지나 덧붙이는 리뷰 환영입니다!

# 클래스 설명

## [App.js](https://github.com/woowacourse-precourse/javascript-lotto/pull/364/files#diff-3d74dddefb6e35fbffe3c76ec0712d5c416352d9449e2fcc8210a9dee57dff67) : 시작 트리거를 날립니다.

- play() : 구입금액을 입력받고 inputBudgetCallback 을 실행합니다.
- inputBudgetCallback() : 입력받은 구입금액으로 TicketBox 클래스 인스턴스를 만듭니다.

## [TicketBox.js](https://github.com/woowacourse-precourse/javascript-lotto/pull/364/files#diff-282ef3d3386b3878fc7bc9ec1813e015383d0fed78333053ba17204a0d36f2ea) : 매표소라는 뜻으로 사용했습니다. 돈을 받고 로또 발행, 당첨번호와 보너스 번호 입력, 당첨 결과를 처리하는 총괄. main이라고 생각하시면 됩니다.

- makeTickets() : 로또를 발행하고 곧이어 당첨번호를 입력 받습니다.
- inputLottoCallback(): Lotto.js로 당첨번호를 입력받아 유효성 검사를 하고 곧이어 보너스 번호를 입력 받습니다.
- lottoValidate() : 당첨번호 문자형일 때 유효성 검사
- inputBonusCallback() : Bonus.js로 보너스 번호를 입력 받고 곧이어 BillBoard.js로 당첨 결과를 처리합니다.

## [Lotto.js](https://github.com/woowacourse-precourse/javascript-lotto/pull/364/files#diff-7803949204b374f29124b518149172122e713f9d8f38f50df9b6864d4e53df83) : 당첨번호를 받아 유효성 검증을 합니다.

## [Bonus.js](https://github.com/woowacourse-precourse/javascript-lotto/pull/364/files#diff-6cebe3a43c6bc5251aae01e824269545607d503a168386fbf3d57d6e54ad6fa5) : 보너스번호를 받아 유효성 검증을 합니다.

## [BillBoard.js](https://github.com/woowacourse-precourse/javascript-lotto/pull/364/files#diff-6f9e2aa44b79abb1c20aca6949c857649902a804a3ade5f63412ff64cac846fb) : 당첨결과를 처리합니다.

- makeBillBoard() : 당첨번호화 로또번호를 비교하고 각 등수별 당첨된 로또수를 산출하여 결과와 수익률을 출력하는 메소드를 실행합니다. BillBoard의 main 이라고 생각하시면 됩니다.
- match() : 당첨번호와 로또번호(일치가 5일 경우 보너스 번호도 비교)를 비교하여 각 로또번호가 얼마나 일치하는지 반환합니다.
- countByInstance() : 각 등수가 몇개인지 count합니다.
- printStatics() : 각 등수 별 당첨된 수를 출력합니다.
- printRateOfReturn : 수익률을 계산하여 출력합니다.

## [Counter.js](https://github.com/woowacourse-precourse/javascript-lotto/pull/364/files#diff-8a341a90cc463b77ec2ddad2e53250bd9fd5fce89f9ad2d93a1e2b2e69fa38b8) : 각 등수를 인스턴스로 만드기 위한 클래스

- matchName() : 일치 이름
- WinningsByCount() : 각 등수별 총 상금
- winnings() : 각 등수별 상금
- count() : 각 등수 수량
- increaseCount() : 각 등수 수량 증가

**EOF**
