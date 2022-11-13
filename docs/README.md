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

- validInputMoney: 구입 가격 입력값 validation
- getLottoNumber: 구입 가격에 따른 로또 개수 출력
- issueLottos: 로또를 발행
- setRandomNumbers: 로또 발행하기 위해 랜덤의 숫자 6개 발행
- sortNumbers: 로또 발행하기 전 랜덤의 숫자 오름차순 정렬
- setLottoWinningNumber: 로또 당첨번호 및 보너스 번호 받기
- getResult: 결과 출력

### Lotto

- validate: 발행 할때의 로또 번호 입력값 validation
- checkRate: 로또 번호 값과 등수 확인하여 출력

## 상수 설정

- MESSAGE
  - ERROR
- 변수 설정
