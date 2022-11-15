<div align="center">

![lotto2](https://user-images.githubusercontent.com/73439375/201501460-11f849da-3bf5-40e2-b007-17b21342cac6.png)

![Node.js](https://img.shields.io/badge/node.js-v14.17.5-yellow?logo=node.js)
![Jest](https://img.shields.io/badge/jest-29.0.3-1cf?logo=jest)

</div>

<div align="center">

## 💴 로또 게임 💴

</div>

<p align="center"><img width="60%" src="https://user-images.githubusercontent.com/73439375/201503468-7cc87fcb-f201-47ad-971b-9373c6fee3d4.gif"/></p>

## 🎯 게임 규칙

- 로또 번호의 숫자 범위는 1~45까지이다.
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  ```
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
  ```
- 입력
  - 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
  ```
  14000
  ```
  - 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다
  ```
  1,2,3,4,5,6
  ```
  - 보너스 번호를 입력 받는다.
  ```
  7
  ```
- 출력
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
  - 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.
  ```
  [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
  ```

## 🚨 프로그래밍 제약 사항

- Node.js 14 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `play` 메서드이다.


- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.

- 라이브러리
  - [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
    - Random 값 추출은 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickUniqueNumbersInRange()`를 활용한다.
    - 사용자의 값을 입력 받고 출력하기 위해서는 [MissionUtils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.

## 💡 게임 실행 방법

### 1. 깃 클론받기
```
git clone https://github.com/geunu97/javascript-lotto.git
```

### 2. 브랜치 이동하기
```
git chekout geunu97
```

### 3. 실행하기
```
node src/index.js
```

## 🔍 테스트 실행 방법

### 1. 테스트 실행하기
```
npm i
npm test
```
