![banner_3week](https://user-images.githubusercontent.com/87642422/201918253-2603d48c-4efa-4588-9538-3f42717da918.png))

# Week 3: 로또

## 파일 구조

```
📦__tests__
 ┣ 📜ApplicationTest.js
 ┣ 📜LottoScoreBoardTest.js
 ┗ 📜LottoTest.js

 📦src
 ┣ 📂constant
 ┃ ┗ 📜Constant.js
 ┣ 📂lib
 ┃ ┣ 📜BetterConsole.js
 ┃ ┣ 📜LottoPicker.js
 ┃ ┗ 📜Validator.js
 ┣ 📜App.js
 ┣ 📜BonusNumber.js
 ┣ 📜Inventory.js
 ┣ 📜Lotto.js
 ┣ 📜LottoScoreBoard.js
 ┗ 📜Printer.js

```

### Model

- `BonusNumber.js`: 로또 게임의 보너스 숫자에 해당하는 모델입니다. 기본적인 값 검증 기능이 포함되어 있습니다.
- `Lotto.js`: 로또 게임의 6개의 숫자를 저장할 수 있는 모델입니다. 기본적인 값 검증 기능이 포함되어 있습니다.
- `Inventory.js`: 구매한 복권을 저장하는 역할을 하는 모델입니다. 로또를 랜덤으로 뽑아 구매할 수 있으며, 당첨 개수 별로 결과를 얻을 수 있습니다.
- `LottoScoreBoard.js`: 로또의 당첨 결과가 주어지면 당첨 횟수를 저장하며, 수익률을 계산하여 결과를 얻을 수 있습니다.

### View

- `Printer.js`: 게임 결과가 주어지면 사용자에게 결과를 출력해 주는 역할을 수행합니다.

### Controller

- `App.js`: 테스트 진행 시 실행해야 하는 파일입니다. 전반적인 **게임을 진행**하는 역할을 수행합니다.

### Library

- `BetterConsole.js`: 기존 `MissionUtils` 라이브러리의 기능에 더해, 여러 줄의 탬플릿 형태의 결과를 출력할 때 자동으로 불필요한 공백을 제거하여 출력해 줍니다.
- `LottoPicker.js`: 여러 개의 정렬된 로또 배열을 얻어낼 수 있습니다.
- `Validator.js`: 데이터 검증 라이브러리입니다. 요청이 있을 경우 사용자의 입력값을 검증하고, 올바르지 않은 입력일 경우 에러를 발생시킵니다.

## 기능 목록

### Model

#### BonusNumber.js

- [x] 데이터 검증 기능 구현하기
- [ ] 보너스 숫자를 반환하는 기능 구현하기

#### Lotto.js

- [ ] 데이터 검증 기능 구현하기
- [ ] 6개의 로또 숫자를 반환하는 기능 구현하기

#### Inventory.js

- [ ] 사용자의 돈이 주어지면 로또 생성하는 기능 구현하기
- [ ] 당첨 로또가 주어지면 추첨 결과 반환하는 기능 구현하기
  - [ ] 추첨 결과를 계산하는 기능 구현하기
  - [ ] 로또 당첨 점수를 계산하는 기능 구현하기

#### LottoScoreBoard.js

- [ ] 로또 숫자 일치 개수가 주어지면, 결과를 판단하여 저장하는 기능 구현하기
- [ ] 최종 로또 결과 반환하는 기능 구현하기
  - [ ] 수익률 계산하는 기능 구현하기

### View

#### Printer.js

- [ ] 구매 메시지 출력하는 기능 구현하기
- [ ] 게임의 최종 결과를 출력하는 기능 구현하기

### Controller

#### App.js

- [ ] `MoneyInputPhase`: 돈을 입력받으면 랜덤 생성된 로또를 보여주는 단계 구현하기
- [ ] `winLottoInputPhase`: 6개의 일반 로또 숫자를 입력받고 저장하는 단계 구현하기
- [ ] `bonusNumberInputPhase`: 보너스 숫자를 입력받고 저장하는 단계 구현하기
- [ ] `showingResultPhase`: 로또 게임의 최종 결과를 출력하는 단계 구현하기
- [ ] `exitPhase`: 게임을 종료하는 단계 구현하기

### Library

#### BetterConsole.js

- [x] 탬플릿 문자열을 출력할 수 있는 기능 구현하기

#### LottoPicker.js

- [x] 수가 정렬된 로또를 한꺼번에 여러 개 받을 수 있는 기능 구현하기
  - [x] 로또 정렬 기능 구현하기

#### Validator.js

- [x] 로또 기본 숫자 6개를 검증하는 기능 구현하기
- [x] 보너스 숫자를 검증하는 기능 구현하기
- [x] 돈의 액수를 검증하는 기능 구현하기
- [x] 로또 기본 숫자 6개와 보너스 숫자가 겹치지 않는지를 검증하는 기능 구현하기
