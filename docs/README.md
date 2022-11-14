# javascript-lotto

## 📢2주차 공통 피드백

<details>
<summary>자세히 보기</summary>

### README.md를 상세히 작성한다
미션 저장소의 README.md는 소스코드에 앞서 해당 프로젝트가 어떠한 프로젝트인지 마크다운으로 작성하여 소개하는 문서이다. 해당 프로젝트가 어떠한 프로젝트이며, 어떤 기능을 담고 있는지 기술하기 위해서 마크다운문법을 검색해서 학습해보고 적용해 본다.

### 기능 목록을 재검토한다
기능 목록을 클래스 설계와 구현, 함수(메서드) 설계와 구현과 같이 너무 상세하게 작성하지 않는다. 클래스 이름, 함수(메서드) 시그니처와 반환값은 언제든지 변경될 수 있기 때문이다. 너무 세세한 부분까지 정리하기보다 구현해야 할 기능 목록을 정리하는 데 집중한다. 정상적인 경우도 중요하지만, 예외적인 상황도 기능 목록에 정리한다. 특히 예외 상황은 시작 단계에서 모두 찾기 힘들기 때문에 기능을 구현하면서 계속해서 추가해 나간다.

### 기능 목록을 업데이트한다
README.md 파일에 작성하는 기능 목록은 기능 구현을 하면서 변경될 수 있다. 시작할 때 모든 기능 목록을 완벽하게 정리해야 한다는 부담을 가지기보다 기능을 구현하면서 문서를 계속 업데이트한다. 죽은 문서가 아니라 살아있는 문서를 만들기 위해 노력한다.

### 값을 하드 코딩하지 않는다
문자열, 숫자 등의 값을 하드 코딩하지 마라. 상수를 만들고 이름을 부여해 이 변수의 역할이 무엇인지 의도를 드러낸다.

### 구현 순서도 코딩 컨벤션이다
클래스는 필드, 생성자, 메서드 순으로 작성한다.

```js
class A {
    필드

    생성자

    메서드
}
```

### 한 함수가 한 가지 기능만 담당하게 한다
함수 길이가 길어진다면 한 함수에서 여러 일을 하려고 하는 경우일 가능성이 높다. 아래와 같이 한 함수에서 안내 문구 출력, 사용자 입력, 유효값 검증 등 여러 일을 하고 있다면 이를 적절하게 분리한다.

```js
const userInput = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  MissionUtils.Console.readLine("숫자를 입력해 주세요: ", (input) => {
    const userNumbers = input.split(",");
    if (userNumbers.length !== 3) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  });
};
```

### 함수가 한 가지 기능을 하는지 확인하는 기준을 세운다
만약 여러 함수에서 중복되어 사용되는 코드가 있다면 함수 분리를 고민해 본다. 또한, 함수의 길이를 15라인을 넘어가지 않도록 구현하며 함수를 분리하는 의식적인 연습을 할 수 있다.

### JavaScript에서 객체를 만드는 다양한 방법을 이해하고 사용한다.
JavaScript에서는 클래스 말고도 객체를 만드는 방법은 여러 가지가 있다. 객체를 생성하는 방법에 대해서는 MDN 문서의 JavaScript 객체 기본과 Classes을 참고한다.

### 테스트를 작성하는 이유에 대해 본인의 경험을 토대로 정리해본다
단지 기능을 점검하기 위한 목적으로 테스트를 작성하는 것은 아니다. 테스트를 작성하는 과정을 통해서 나의 코드에 대해 빠르게 피드백을 받을 수 있을 뿐만 아니라 학습 도구([학습테스트를 통해 JUnit 학습하기.pdf](https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/9b82d8a360c548fcadd14c551dbcbe06))로도 활용할 수 있다. 이런 경험을 통해 테스트에 대해 어떤 유용함을 느꼈는지 알아본다.
처음부터 큰 단위의 테스트를 만들지 않는다
테스트의 중요한 목적 중 하나는 내가 작성하는 코드에 대해 빠르게 피드백을 받는 것이다. 시작부터 큰 단위의 테스트를 만들게 된다면 작성한 코드에 대한 피드백을 받기까지 많은 시간이 걸린다. 그래서 문제를 작게 나누고, 그 중 핵심 기능에 가까운 부분부터 작게 테스트를 만들어 나간다.

### 큰 단위의 테스트
숫자 야구 게임을 시작해서 사용자가 숫자를 입력하면, 컴퓨터 숫자와 비교하여 그 결과를 알려준다.

### 작은 단위의 테스트
사용자의 숫자가 컴퓨터의 숫자와 하나도 일치하지 않으면 낫싱을 출력한다.
사용자의 숫자가 컴퓨터의 숫자와 1개는 일치하고, 위치가 다르면 1볼을 출력한다.

</details>


## 📃구현할 기능 목록

아래와 같은 형식으로 작성합니다.
```
* 기능 분류 (브랜치명)
  - 기능1
  - 기능2
  - ...
```

* 로또 기본 기능 (lotto-basic)
  - **MUST**) 하나의 **로또**는 번호 6개를 가져야 한다.
  - **MUST NOT**) **로또** 번호의 숫자 범위는 1~45를 벗어나선 안된다.
  - **MUST NOT**) **로또** 번호는 모두 중복되지 않아야 한다.
  - **SHOULD**) **로또** 번호는 오름차순으로 정렬되어야 한다.

* 로또 구매 기능 (lotto-buy)
  - **MUST**) **로또** 1장의 가격은 1,000원이어야 한다.
  - **MUST**) **사용자**가 구입 금액을 입력하면 금액에 맞게 **로또**를 구매할 수 있어야 한다.
  - **MUST**) **로또** 번호는 무작위로 결정된다.
  - **MUST NOT**) **로또**를 구입한 후 남는 금액이 발생해선 안된다.
  - **SHOULD**) **로또**를 1개 이상 구매하여야 한다.

* 당첨 로또 기능 (lotto-winning)
  - **MUST**) **당첨 로또**는 **로또**가 가진 조건을 모두 만족해야 한다.
  - **MUST**) **당첨 로또**는 6개의 번호 외에 보너스 번호를 추가로 입력해야 한다.

* 로또 당첨금 기능 (lotto-rewards)
  - **MUST**) **사용자**가 구매한 모든 **로또**에 대해 당첨 결과를 계산하여야 한다.
  - **MUST**) **로또**와 **당첨 로또**의 번호를 비교하여 맞힌 개수에 따라 등수를 정해야 한다.
  - **MUST**) 등수에 따라 아래와 같이 상금이 결정된다.
    |등수|조건|상금|
    |:-:|-|-:|
    |1등|6개 번호 일치|2,000,000,000원|
    |2등|5개 번호 + 보너스 번호 일치|30,000,000원|
    |3등|5개 번호 일치|1,500,000원|
    |4등|4개 번호 일치|50,000원|
    |5등|3개 번호 일치|5,000원|

  - **MUST**) 당첨금에 대해 수익률을 계산하여야 한다.

* 입출력 및 UI 기능 (ui)
  - **MUST**) 모든 입력과 출력은 콘솔에서 진행된다.
  - **MUST**) 예외 상황 발생 시 `"[ERROR]"` 로 시작되는 예외를 던지고 프로그램이 종료되어야 한다.
  - **MUST**) **로또** 구매가 끝난 후 로또 수량과 번호를 오름차순으로 출력해야 한다.
  - **MUST**) **로또** 번호는 `[1, 2, 3, 4, 5, 6]` 형식으로 출력해야 한다.
  - **MUST**) **당첨 로또** 번호는 `1,2,3,4,5,6` 형식으로 입력받아야 한다.
  - **MUST**) 당첨금은 3자리마다 콤마(,)를 넣어 출력해야 한다.
  - **MUST**) 수익률은 소수점 둘째 자리에서 반올림한 형식으로 출력해야 한다.
  - **MUST**) **사용자**가 구매한 모든 **로또**에 대한 당첨 결과를 일치 개수를 기준으로 오름차순으로 출력해야 한다.
  - **MUST**) 해당하는 개수에 대해 당첨된 **로또**가 없으면 0개로 출력해야 한다.

## ✒디렉토리 및 파일 설계

```
src/
  errors/
    LottoError.js
    LottoValidationError.js
  domains/
    User.js
      class User
        #lottos
        constructor()
        buyLottos(money)
        getLottos()
    Lotto.js
      class Lotto
        NUMBER_SIZE = 6
        NUMBER_MIN = 1
        NUMBER_MAX = 45
        PRICE = 1000
        #numbers
        constructor(numbers)
        validate(numbers)
        static parseLotto(text)
        static fromRandom()
        getNumber()
        hasNumber()
        toString()
    WinningLotto.js
      class WinningLotto
        #lotto
        #bonusNumber
        constructor(lotto, bonusNumber)
    LottoReward.js
      class LottoReward
        #title
        #money
        #condition
        constructor(title, money, condition)
        isEligible(lotto)
        getMoney()
        toString()
    LottoRound.js
      class LottoRound
        REWARDS = []
        #winningLotto
        constructor(winningLotto, rewards = REWARDS)
        getReward(lotto)
  views/
    InteractivePrompt.js
      class InteractivePrompt
  constants/
    Messages.js
  validators/
  App.js
  Lotto.js
```

## 🥽테스트 작성 목록

* `Lotto`
  - 로또가 가질 수 있는 숫자 갯수 테스트
  - 로또가 가질 수 있는 숫자의 최소값, 최대값 테스트
  - 로또 번호가 중복이 될 수 없는지 테스트
  - 로또 번호가 오름차순으로 정렬되는지 테스트
  - 로또가 랜덤으로 잘 생성되는지 테스트

* `User`
  - 로또를 정상적으로 구매할 수 있는지 테스트
  - 로또를 1장도 못 살 돈으로 구매 시 예외처리되는지 테스트

## 🎨코드 스타일

- <details>
    <summary>eslint 사용</summary>

    `npm install --save-dev eslint` 로 설치하고 .eslintrc.js 파일을 생성하여 코드 스타일을 정의한다.
  </details>

- <details>
    <summary>prettier 사용</summary>

    `npm install --save-dev prettier` 로 설치한다.

    .prettierrc 파일을 생성한 후 prettier 규칙을 추가한다.
  </details>

- <details>
    <summary>airbnb 규칙 사용</summary>

    `npx install-peerdeps --dev eslint-config-airbnb` 명령으로 설치한다.

    .eslintrc.js의 `extends: [...]` 에 `'airbnb'` 를 추가한다.
  </details>

- <details>
    <summary>우아한테크코스 규칙 사용</summary>

    * indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
    ```js
    rules: {
      'max-depth': ['error', 2],
    }
    ```

    * 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
    ```js
    rules: {
      'max-lines-per-function': ['error', 15],
    }
    ```
  </details>

- <details>
    <summary>JSDoc 작성</summary>

    클래스, 함수, 변수의 문서화 및 타입을 명확히 하기 위해 JSDoc을 작성한다.

    ```js
    /**
     * 공백을 횟수만큼 늘려주는 함수
     * @param {number} count
     * @returns {string}
     */
    function blank(count) {
      return Array(count).fill(' ').join('');
    }
    ```
  </details>
