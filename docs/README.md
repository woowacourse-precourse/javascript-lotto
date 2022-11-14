## 구현 로직

1. 구입 금액 입력을 받는다
   - 구입 금액에대한 validation
2. 각 로또에 대해 임의의 수 6자리를 부여하여 로또 발행
3. 당첨 번호, 보너스 번호 입력 받기
4. 각 로또와 당첨번호, 보너스 번호를 비교하여 당첨 등수 및 금액 확인

## class 구분

- App : 구입금액을 받아 로또를 발행하고, 당첨번호 보너스 번호 입력을 받는다.
- lotto : 로또를 발행하면 자동으로 번호를 생성한다.

## 기능 목록

### App

- getLottoCount: 구입가격에 따른 로또의 개수 계산
- issueLottos: 로또를 발행
- getResult: 결과 출력

- setLottosRandomNumbers: 로또 발행하기 위해 랜덤의 숫자 6개 발행
- printLottos: 각 발행된 로또 번호 출력
- validateOverLapWithWinningNumbers: 보너스와 로또번호에 곂치는 것 확인
- setBonusNumber: 보너스 숫자 할당
- setWinningNumbers: 로또 번호 할당

- setResult: 로또 클래스 내에서 값이 할당되도록 메소드 실행
- setLottoResult: App 클래서에서 값을 할당하려고 노력
- getRankInLotto: Lotto 클래스 내에서 결과값을 출력

- printResult: 결과값 출력
- printRankResult: 각 등급에 맞는 결과값 출력

### Lotto

- validate: 발행 할때의 로또 번호 입력값 validation
- print: lotto의 할당된 번호 출력
- checkRate: 로또 번호 값과 등수 확인하여 출력
- setLottoResult: 로또번호가 몇개 맞는 지 확인
- setBonusResult: 보너스 번호가 맞는 지 확인

### Function

- validateInputMoney : 입력되는 돈을 validation 한다
- validateUnitRemainder: INPUT_MONEY_UNI보다 작은 단위가 있는지 확인
- validateInputNumbers: 입력되는 Numbers를 validation
- validateOverlapNumbers: Numbers와 곂치는지 확인
- validateInputNumber: Number의 입력값 확인
- validateRange: START~END 인지 확인
- validateLength: array.length가 6인지 확인
- validateTypeNumber: Number type이 맞는지 확인
- setRandomNumbers: 1~45까지 6개의 원소를 가진 array 출력
- sortNumbers: 첫째 자리수 를 기분으로 정렬
- splitNumbers: ","를 기준으로 split
- getRateOfReturn: 수익률 계산
- getRewardKey: 어떤 종류의 등급이 있는지 출력

## 상수 설정

- MESSAGE
- ERROR_MESSAGE
- REWARD
- INPUT_MONEY_UNIT
