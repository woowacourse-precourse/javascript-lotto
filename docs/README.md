# 미션 - 로또

## 기능 목록

- [x] 1부터 45까지의 서로 다른 임의의 수 6개를 생성, 정렬한다. - NumberGenerator#generateRandomNumbers()
- [x] 몇 개의 숫자가 같은지를 알 수 있다. - Judge#countCorrect()
- [x] 보너스 번호를 확인한다. - Judge#checkBonus()
- [x] 숫자 6개를 비교할 수 있다. - Referee#compare()
  - [x] 숫자 3개만 일치하면 5등이다.
  - [x] 숫자 4개만 일치하면 4등이다.
  - [x] 숫자 5개만 일치하면 3등이다.
  - [x] 숫자 5개가 일치하고 보너스 번호가 일치하면 2등이다.
  - [x] 숫자 6개가 모두 일치하면 1등이다.
- [x] 구입금액 대비 수익률을 구할 수 있다. - Calculator#calcProfit()
- [x] 입력 금액을 1,000으로 나눈 몫을 구할 수 있다. - Calculator#calcQuotient()

---

## 입력 예외 상황

### 공통

- [x] 숫자, 쉼표(,) 이외의 값이 입력될 경우 - Validator#validateInput()

## Lotto

- [x] 1 ~ 45 이외의 숫자가 입력될 경우 - Validator#validateNumber()
- [x] 6개의 숫자가 입력되지 않을 경우
- [x] 중복된 숫자가 입력될 경우 - Validator#validateNumbers()

## Game

- [x] 1,000원 단위가 아닌 금액이 입력 될 경우 - Validator#validateMoney()
