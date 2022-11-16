# 📝 구현할 기능 목록

- UI : App.js
- 순위 계산 : Lotto.js
- 돈 계산 : Calculator.js
- 검증 : Validator.js

## 입력 / 출력

### 1. 구입 금액 입력

- App.recordPay

### 2. 구입한 로또 출력

- App.printLottos

### 3. 당첨 번호 입력

- App.recordWinNumbers

### 4. 보너스 번호 입력

- App.recordBonusNumber

### 5. 당첨 통계 출력

- App.printResult

## 기능

### 1. 구입 금액으로 로또 개수 계산

- Calculator.calcBuyCount

### 2. 개수만큼 로또 구입

- App.buyLottos

### 3. 로또와 입력을 비교해서 순위를 계산

- Lotto.rank

### 4. 총 수입을 계산

- App.calculateResult

#### 4-1. 순위에 맞는 수익을 계산

- Calculator.addPrize

### 5. 수익률 계산

- Calculator.calcProfitRate

## 검증

### 1. 허용된 입력값인지 검증

- Validator.checkInput

### 2. 숫자인지 검증

- Validator.checkNumber

### 3. 로또 범위 검증

- Validator.checkLottoNumber

### 4. 로또 숫자 배열 검증

- Validator.checkLottoNumbers

### 5. 보너스 번호 검증

- Validator.checkBonusNumber

### 6. 구입 금액 검증

- Validator.checkPay
