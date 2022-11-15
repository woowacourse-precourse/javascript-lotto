## 💡 Features List of Lotto Game

## 📌 Abstract

- 로또 게임 구현에 필요한 기능들을 작성한 문서입니다.
- 게임 실행 중 일어날 수 있는 상황을 크게 4가지로 구분했고, 이는 다음과 같습니다.
  1. 게임 시작
  2. 게임 진행
  3. 게임 종료
  4. 예외 상황
- 본 문서에서는 각 게임 상황 발생 시 필요한 기능들을 목록화하였습니다.

## 📌 Structure of Directory

```
javascript-lotto
├─ docs
│ └─ README.md
├─ src
│ ├─ App.js
│ ├─ Lotto.js
│ └─ utils
│   ├─ constants.js
│   ├─ functions.js
│   └─ messages.js
└─ __tests__
├─ ApplicationTest.js
└─ LottoTest.js
```

## 📌 Cases

### 🔸 Start Game

- [x] 게임 시작 시 구입 금액을 입력하라는 안내 문구를 출력하고, 사용자의 입력 값으로 1000으로 나누어 떨어지는 숫자 1개를 받는다.
  - 게임 시작 - `App.play`
  - 구입 금액 입력 - `App.#startGame`

### 🔸 Progress Game

- [x] 사용자가 입력한 금액을 1000으로 나눈 개수만큼 로또를 발급하여 출력한다.
  - 로또 발급 - `App.#buyLotto`
  - 로또 생성 - `App.#issueLotto`
  - 로또 출력 - `App.#printLotto`
- [x] 당첨 번호를 입력하라는 안내 문구를 출력하고, 사용자의 입력 값으로 중복되지 않는 숫자 6개를 받는다.
  - 당첨 번호 입력 - `App.#getWinningNums`
- [x] 보너스 번호를 입력하라는 안내 문구를 출력하고, 사용자의 입력 값으로 당첨 번호와 겹치지 않는 숫자 1개를 받는다.
  - 보너스 번호 입력 - `App.#getBonusNum`

### 🔸 End Game

- [x] 발급한 로또와 사용자가 입력한 당첨 번호, 보너스 번호를 비교한다.
  - 비교 및 통계 계산 - `Lotto.calculateStatics`
  - 통계 갱신 - `Lotto.updateStatics`
- [x] 비교한 결과를 바탕으로 수익률을 계산한다.
  - 수익률 계산 - `Lotto.calculateEarningsRate`
  - 총 상금 계산 - `Lotto.addWinningPrice`
- [x] 계산한 수익률을 출력 형식에 맞게 변환한다.
  - 수익률 변환 - `Lotto.convertRate`
- [x] 당첨 통계와 수익률을 출력한 후 게임을 종료한다.
  - 당첨 통계 및 수익률 취득 - `App.#getResults`
  - 결과 메시지 생성 - `App.#createResultMessage`
  - 결과 출력 - `App.#printResults`
  - 게임 종료 - `App.#endGame`

### 🔸 Error Case

- [x] 게임 시작 시 사용자가 입력한 금액이 1000으로 나누어 떨어지지 않는 경우 에러를 발생시킨다.
  - 입력 값 검증 - `App.#validatePrice`
- [x] 당첨 번호를 입력할 때 입력 형식이 올바르지 않거나 중복되는 경우 에러를 발생시킨다.
  - 입력 값 검증 - `Lotto.validateWinningNums`
- [x] 보너스 번호를 입력할 때 입력 형식이 올바르지 않거나 당첨 번호와 중복되는 경우 에러를 발생시킨다.
  - 입력 값 검증 - `Lotto.validateBonusNum`
