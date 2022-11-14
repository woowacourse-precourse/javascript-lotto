# 미션 - 로또

<details open>
    <summary>
    <h2 style="display:inline"> ✅ 미션 요구사항</h2></br>
    우테코 3주차 로또 미션에 대한 요구사항입니다.
    </summary>

</br>
<details open>
    <summary>
       <h3 style="display:inline;"> 🚀 기능 요구 사항!</h2>
    </summary>
    
로또 게임 기능을 구현해야 한다. 로또 게임은 아래와 같은 규칙으로 진행된다.

```
- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
```

- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.

### 입출력 요구 사항

#### 입력

- 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.

```
14000
```

- 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.

```
1,2,3,4,5,6
```

- 보너스 번호를 입력 받는다.

```
7
```

#### 출력

- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.

```
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

- 당첨 내역을 출력한다.

```
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
```

- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

```
총 수익률은 62.5%입니다.
```

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

```
[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
```

#### 실행 결과 예시

```
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

</details open>
<details open>
    <summary> 
        <h3 style="display: inline"> 🎯 프로그래밍 요구사항 </h3>
</summary>

- Node.js 14 버전에서 실행 가능해야 한다. **Node.js 14에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- 프로그램 실행의 시작점은 `App.js`의 `play` 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.

**예시**

```javascript
const app = new App();
app.play();
```

- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.

### 추가된 요구 사항

- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
  - 단위 테스트 작성이 익숙하지 않다면 `__tests__/LottoTest.js`를 참고하여 학습한 후 테스트를 구현한다.

### 라이브러리

- [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
  - Random 값 추출은 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickUniqueNumbersInRange()`를 활용한다.
  - 사용자의 값을 입력 받고 출력하기 위해서는 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.

#### 사용 예시

```javascript
const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
```

### Lotto 클래스

- 제공된 `Lotto` 클래스를 활용해 구현해야 한다.
- `numbers`의 `#` prefix를 변경할 수 없다.
- `Lotto`에 필드를 추가할 수 없다.

```javascript
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error();
    }
  }

  // TODO: 추가 기능 구현
}
```

</details open>

<details open>
    <summary> 
         <h3 style="display: inline"> ✏️ 과제 진행 요구 사항 </h3>
    </summary>

- 미션은 [javascript-lotto](https://github.com/woowacourse-precourse/javascript-lotto/) 저장소를 Fork & Clone해 시작한다.
- **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.
- **Git의 커밋 단위는 앞 단계에서 `docs/README.md`에 정리한 기능 목록 단위**로 추가한다.
  - [커밋 메시지 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 가이드를 참고해 커밋 메시지를 작성한다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.

</details open>
</details open>

---

<details open>
    <summary>
        <h2 style="display:inline-block;"> ✍🏻 프로젝트 관련 주요사항 </h2> 
        </br>
        프로젝트의 전반적인 이해를 돕기 위한 핵심 내용입니다.
    </summary>

</br>

### 1. 클래스 설명

```javascript
// 프로그램의 현재 상태와 당첨번호를 관리하는 클래스
class App {
  #purchaseMoney; // 사용자가 입력한 로또 구입 금액
  #lotteryNumber; // 로또 추첨 번호
  #bonusNumber; // 보너스 번호

  play(){}
  lotteryNumberPhase(){}
  bonusNumberPhase(){}
  statisticPhase(){}
  end()
}
```

- 프로그램의 메인 로직을 따라서 실행합니다
- **사용자가 값을 입력할 때**를 기준으로 로직을 순차적으로 실행합니다
  시작 - 당첨번호값 입력 - 보너스번호값 입력 - 통계출력 - 게임종료 순
- 각각의 phase에서는 getValueWithType()로 게임에 필요한 값들을 저장합니다.  
  #purchaseMoney (구입금액),#lotteryNumber (추첨번호),#bonusNumber 보너스번호

</br>

```javascript
// 생성된 로또번호와 관련된 클래스
class Lotto {
  static createNumber() {}
  static validate() {}
  winningConfirm() {}
}
```

- static createNumber()
  - 정적 메소드로, 1~45사이의 6자리 랜덤한 숫자 정렬해서 반환합니다.
- static validate()
  - 정렬된 1~45사이 6자리 숫자와 보너스 숫자로 이루어진 로또번호 양식을 테스트합니다.

</br>

```javascript
// 로또 구입 목록과 관련된 클래스
class Customer {}
```

</br>

```javascript
/* 입력값과 관련된 클래스 */
class Input {
  getValueWithType(type, callback) {}
}
```

- getValueWitheType(type,callback)
  - type: 입력받을 값의 타입 구입금액, 당첨번호, 보너스번호를 utils/key.js에 미리 상수값으로 작성해두어 값을 가져와 사용
  - callback : Console.readLine으로 입력된 값을 callback함수의 파라미터로 전달, callback 함수는 값을 저장할 수 있는 함수를 사용.

</br>

```javascript
// 값을 출력하는 콘솔과 관련된 클래스
class Print {}
```

```javascript
// 예외 처리와 관련된 클래스
class ExceptionrCheck {
  #errorCheckMethodList;

  #setErrorCheckMethoList() {}
  #isMethodIn(exceptionType) {}

  check() {}

  is${ErrorMethod}(params){}
}
```

- 예외 처리를 위해 구현된 부모클래스입니다.
- 사용법은 아래 핵심 로직에 기록되어있습니다
- </br>

### 2. 핵심 로직

### 메인 로직

```

    구매금액 입력받기
          ↓
    금액만큼 Lotto 구입
          ↓
    당첨번호 입력받기
          ↓
    보너스번호 입력받기
          ↓
    로또번호 당첨확인
          ↓
    통계 출력

```

### 에러 처리 클래스 생성 로직

#### 1. 클래스 구조, 사용방법

```javascript

    //전처리 과정
    자식 클래스) 예외 체크 로직이 있는 프로토타입 메소드가 작성되어있어야함
                ↓
    자식 클래스) super()로 ExceptionCheck 클래스 상속
                ↓
    부모 클래스) Object.getProtoTypeOf(this)로 자식 클래스의 프로토타입 메소드 #exceptionCheckmethodList에 저장
                ↓
    부모 클래스) ExcetionCheck의 check() 메소드는  자식클래스에 예외 체크 메소드가 존재하면, 그 메소드를 실행시켜주는 역할을 함.


```

#### 2. 중복되는 에러 체크 메서드들 등록

```javascript
class ExceptionCheck {
  /*...*/

  // 기능별 예외 체크 클래스에서 중복되어 사용되는 예외체크 메서드들을 ExceptionCheck 클래스에 미리 등록
  isNumber(number) {} // 파라미러로 받은 number 에러체크
  isSortedArray(array) {} // 파라미터로 받은 array가 정렬되었는지 확인
  isNumberInRange(number) {} // 파라미터로 받은 number가 1~45 사이의 숫자인지 확인
}
```

#### 3. 실제 예외 체크 클래스 생성 예시

```javascript
    //부모 클래스 -> ExceptionCheck 클래스
    //자식 클래스 -> Input 클래스 예외처리를 구현할 클래스
    class InputExceptionCheck() extends ExceptionCheck {

      purchaseMoney(checkTarget){
        super.isNumber(checkTarget)
        super.isPositiveNumber(checkTarget)
      }
      lotteryNumber(checkTarget){
        /*...
          super.예외사항체크메소드() 를 여러개 사용해서 예외사항 체크
        */
      }
      bonusNumber(checkTarget, param)
      /*
      ...
      추가하고 싶은 예외 사항이 있다면, 아래에 메소드를 추가하여 체크가 가능
      */

    }
```

```javascript
// Input 클래스 내에서 예외 체크 하는 상황
class Input {
  static getValueWithType(type, callback, errorCheckparam) {
    this.readLine(question[type], (string) => {
      const trimmedString = string.trim();
      new InputExceptionCheck().check(type, trimmedString, errorCheckparam);
      // App.js에서 넘겨받은 type, readLine에서 전해주는 string 입력값, app.js에서 넘겨주는 파라미터값으로 예외 체크 메서드 실행
      callback(trimmedString);
    });
  }
  /*...*/
}
```

</details open>

---

<details open>
    <summary>
        <h2 style="display:inline-block;"> 📌 구현할 기능 목록  </h2>
        </br>
         요구사항을 만족하기 위해 작성한 기능 목록입니다.
    </summary>
</br>

### 📍 입력값 처리 기능

- [x] 프로젝트에 필요한 값 입력 기능

### 📍 예외 처리 기능

- [x] 예외 처리 기능에 사용되는 클래스 구현
- [x] 입력값 예외 처리 기능 구현
- [x] 랜덤값 예외 처리 기능 구현
- [x] 당첨값 예외 처리 기능 구현

### 📍 로또 번호 처리 기능

- [x] 랜덤 로또 번호 생성 기능
  - [x] 6자리 추첨번호 생성 기능
  - [x] 추첨번호, 로또번호 예외체크 기능
- [x] 당첨 내역 확인 기능

### 📍 출력 기능

- [ ] 6자리 로또 번호 출력
- [ ] 당첨 통계 출력
- [ ] 수익률 출력
- [ ] 에러 출력

</details open>

---

<details open>
    <summary>
        <h2 style="display:inline-block;"> 📜 테스트 목록  </h2>
        </br>
    </summary>

</br>

## Input 클래스

Input 클래스 테스트

1. 구입금액 입력 테스트

   - 1-1 숫자가 아닌 값을 입력했을 때 예외 발생
   - 1-2 음수의 값을 입력했을 때 예외 발생
   - 1-3 값을 입력하지 않았을 때 예외 발생
   - 1-4 정확한 값을 입력했을 때 통과
     </br>

2. 당첨번호 입력 테스트

   - 2-1 ","와 숫자 이외의 값을 받았을 때 예외 발생
   - 2-2 배열 양식으로 받은 숫자가 더 많을때 예외 발생
   - 2-3 ","가 두번이상 연속으로 입력되었을 때 예외 발생
   - 2-4 중복되는 숫자를 입력받았을 때, 예외 발생
   - 2-5 ,가 먼저 입력되었을 때 얘외 발생
   - 2-6 정확한 값을 입력받았을 때 통과
     </br>

3. 보너스번호 입력 테스트

   - 3-1 숫자가 아닌 값을 입력했을 때 예외 발생
   - 3-2 로또 숫자 범위가 아닌 값을 입력했을 때 예외 발생
   - 3-3 당첨번호와 중복되는 값을 입력했을 때 예외 발생
   - 3-4 정확한 값을 입력했을 때 통과
     </br>

## Lotto 클래스

1. 로또 번호 생성 및 확인 테스트

   - 1-1 로또 번호의 개수가 6개가 넘어가면 예외 발생.
   - 1-2 로또 번호에 중복된 숫자가 있으면 예외 발생.
   - 1-3 로또 번호에 1~45가 아닌 숫자가 있으면 얘외 발생.
   - 1-4 로또 번호가 순서대로 정렬되어 있지 않으면 예외 발생.
   - 1-5 로또 번호가 정확히 입력된 경우 통과
     </br>

2. 당첨번호 유효 테스트

   - 2-1 당첨번호로 입력된 값이 [1. 로또 번호 확인 테스트]를 통과하지 못할 시 예외 발생
   - 2-2 보너스번호로 입력된 값이 1~45가 아닌 숫자가 있으면 얘외 발생.
   - 2-3 보너스번호로 입력된 값이 당첨번호와 중복될 시 예외 발생.
     </br>

3. 당첨번호 + 보너스번호 와 로또번호 체크 테스트
   - 3-1 당첨번호와 로또번호가 일치하는 갯수를 다르게 체크할 시 예외 발생.
   - 3-2 보너스번호가 일치하는 경우를 다르게 표시하지 않을 시 예외 발생.
   - 3-3 당첨번호 + 보너스번호와 로또번호 비교 정확히 했을 시 통과
     </br>

## Print 클래스

1.  </details open>

---
