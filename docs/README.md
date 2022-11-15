# 미션 - 로또

## 🔍 구현 목록

### 로또 발행

- [x] 구입 금액을 입력 메세지를 출력합니다.
- [x] 구입 금액 입력을 받습니다.
  - [x] [ERROR] 구입 금액은 1000원 단위입니다.
  - [x] [ERROR] 구입 금액은 0원 이상입니다.
- [x] 구입 금액을 출력합니다.
- [x] 로또를 구입 금액만큼 발행합니다.
- [x] 발행된 로또를 출력합니다.

### 당첨번호 선택

- [x] 당첨 번호 입력 메세지를 출력합니다.
- [x] 당첨 번호 입력을 받습니다.
  - [x] [ERROR] 6자리만 가능합니다.
  - [x] [ERROR] 1부터 45 사이의 숫자만 가능합니다.
- [x] 보너스 번호 입력 메세지를 출력합니다.
  - [x] [ERROR] 1부터 45 사이의 숫자만 가능합니다.
- [x] 보너스 번호 입력을 받습니다.

### 결과

- [x] 당첨 일치 여부를 계산합니다.
- [x] 당첨 수익률을 계산합니다.
- [x] 당첨 통계를 출력합니다.

## 🗂️ 디렉토리 구조

```
├─ App.js
   ├─ Lotto.js
   ├─ LottoGame.js
   ├─ LottoSystem.js
   ├─ Validator.js
   ├─ players
   │  ├─ Buyer.js
   │  └─ Organizer.js
   └─ utils
      ├─ ErrorMessage.js
      ├─ Message.js
      ├─ constants.js
      ├─ helper.js
      └─ winningPrice.js
```

## 🎛️ 기능 목록

### LottoGame

게임에 대한 전반적인 로직을 담고 있습니다.

- issueLottoTickets(money) : 금액을 입력 받으면 해당 금액만큼 buyer에게 lotto를 지급합니다.
- issueWinningNumbers(numbers) : 당첨 번호를 입력하면 organizer에게 번호가 기입됩니다.
- issueBonusNumber(bonusNumber) : 당첨 보너스 번호를 입력하면 organizer에게 번호기 기입됩니다.
- end() : 로또 결과가 출력되면 프로그램을 종료합니다.

### LottoSystem

로또를 발급하는 로직을 담고 있습니다.

- getLottoes(count) : 로또 금액 입력시 lotto 인스턴스를 생성하고 해당 메세지를 출력합니다.
- getLottoList(count) : 개수만큼 lotto 인스턴스를 생성합니다.
- printPurchasingMessage(lottoList) : lotto 구매 메세지를 출력합니다.

### Validator

콘솔을 통해 유저로부터 입력 받은 값의 유효값을 확인하는 작업을 합니다.

- checkThousands(money) : 금액을 입력 받을 때 1000원단위인지 확인합니다.
- checkNumberInRange(number) : lotto 번호가 1부터 45까지인지 확인합니다.
- checkBonusNumberNotDuplicated(winningNumbers, bonusNumber) : 보너스 번호가 당첨 번호들에 중복되는 것은 없는지 확인합니다.
- checkLottoNumberListLength(numbers) : lotto 번호가 6개인지 확인합니다.
- checkNumberListNotDuplicated(numbers) : lotto 번호들끼리 중복이 되는지 확인합니다.
- checkNumberListInRange(numbers) : lotto 번호가 1부터 45까지인지 전체 번호를 확인합니다.

### Buyer

구매자입니다. 구매 금액과 lotto 등을 갖고 있습니다.

- setMoney(money) : 구매 금액을 갖습니다.
- validate(money) : 구매 금액의 유효성을 검사합니다.
- getLottoList(lottoList) : lotto 인스턴스의 리스트를 갖습니다.
- showLottoList() : 소유하고 있는 lotto 인스턴스를 출력합니다.
- getLottoResultMap(winningNumbers, bonusNumber) : lotto 결과를 확인하기 위한 당첨 순위별 개수를 갖습니다.
- getMatchCount(matchList) : 당첨번호가 정해지면 가지고 있는 lotto 인스턴스의 번호 일치 여부를 확인합니다.
- setGrades(matchCountMap, matchList) : lotto 인스턴스를 하나씩 확인합니다.
- getLottoMatchList(winningNumbers, bonusNumber) : 당첨되지 않는 lotto는 제거합니다.
- setEarningRate(matchCountMap, matchList) : 모든 lotto 인스턴스의 당첨여부를 검사하였으면 수익률을 계산합니다.
- sliceEarningRate(earningRate) : 소수점 끝단에 0이 있을 경우 정리합니다.

### Organizer

로또 발행처입니다. 당첨번호와 보너스 번호를 관리합니다.

- setWinningNumbers(numbers) : 당첨 번호를 설정합니다.
- setBonusNumber(bonusNumber) : 보너스 번호를 설정합니다.
- validateWinningNumbers(numbers) : 당첨 번호의 유효성을 검사합니다.
- validateBonusNumber(winningNumbers, bonusNumber) : 보너스 번호의 유효성을 검사합니다.
- getResultMessage({ first, second, third, forth, fifth, earningRate }) : 구매자가 당첨 여부를 계산하여 가져오면 결과표를 출력해줍니다.

## 🌿 TIL

| 일자 | 링크                                | 키워드                         |
| ---- | ----------------------------------- | ------------------------------ |
| 1️⃣   | 🧩 [15일차 TIL](DAY15_221109.md)    | 피드백 this                    |
| 2️⃣   | 🧩 [16일차 TIL](DAY16_221110.md)    | 예외처리 Array.from 배열       |
| 3️⃣   | 🧩 [17일차 TIL](DAY17_221111.md)    | 함수형프로그래밍 다양한 컬렉션 |
| 4️⃣   | 🧩 [18일차 TIL](DAY18_221112.md)    | 조건문                         |
| 5️⃣   | 🧩 [19일차 TIL](DAY19_221113.md)    | MVC 반복문                     |
| 6️⃣   | 🧩 [20일차 TIL](DAY20_221114.md)    | 매개변수와 반환값              |
| 7️⃣   | 🌠 [3주차 회고](DAY21_3주차회고.md) | 회고                           |
