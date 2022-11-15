# 미션 - 로또

<br/>
<br/>

## ✨ 기능 목록

<br/>

- [x] **게임 시작**

  - [x] 게임 시작 문구를 출력한다 ('구입금액을 입력해 주세요.') MessageOutput # printMessage()

<br/>

- [] **게임 진행**

  - 로또 구매 금액 입력
  - [x] 사용자가 구입금액을 입력한다 UserInput # moneyInput()
  - [x] 1000원으로 나누어 떨어지지 않는 경우 예외 처리한다 UserInput # moneyInput() - checkExceptCaseInMoney()

  - 구매한 로또 번호 출력
  - [x] 발행한 로또 수량을 출력한다 ('n개를 구매했습니다.') MessageOutput # printMessage()
  - [x] 로또 번호를 출력한다 MessageOutput # printMessage()
    - [x] 중복되지 않는 6개의 숫자를 뽑는다 LottoNumberGenerator # createRandomNumbers()
    - [x] 로또 번호는 오름차순으로 정렬하여 보여준다 LottoNumberGenerator # sortingNumbers()
  - [x] 발행한 로또 수량만큼 출력한다

  - 당첨 번호 입력
  - [x] 사용자에게 당첨 번호 입력을 요구한다 ('당첨 번호를 입력해 주세요.') MessageOutput # printMessage()
  - [x] 사용자에게 당첨 번호를 입력받는다 UserInput # setWinNumbersInput()
    - [x] 쉼표를 기준으로 번호를 구분한다 UserInput # isUsingRestMark()
    - [x] 중복되지 않는 숫자 6개를 입력 받는다 UserInput # isNotNumberDuplicate()
    - [x] 1~45 사이의 숫자를 입력 받는다 UserInput # isValidateNumberRange()
  - [x] 보너스 번호를 입력 받는다 ('보너스 번호를 입력해 주세요.') UserInput # bonusNumberInput()

  - 당첨 번호와 로또 번호 비교
    - [x] 당첨 통계 객체에 결과를 저장한다 Compare # saveResult()

<br/>

- [x] **게임 결과**

  - [x] 사용자에게 실행 결과를 안내한다 MessageOutput # printMessage()

  ```
  당첨 통계
  ---
  ```

  - 당첨 내역 출력 MessageOutput # printMessage()
  - [x] 당첨 기준과 금액에 맞춰 당첨 내역을 출력한다 MessageOutput # printMessage()

    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원

    ```
    3개 일치 (5,000원) - 1개
    4개 일치 (50,000원) - 0개
    5개 일치 (1,500,000원) - 0개
    5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
    6개 일치 (2,000,000,000원) - 0개
    ```

  - 수익률 출력 ('총 수익률은 nn.n%입니다.') Calculator # yieldCalculator
    - [x] 당첨 금액의 총합 / 구매 금액으로 수익률을 계산한다
    - [x] 소수점 둘째 자리에서 반올림한다
    - [x] '%'를 붙인다

<br/>

- [] **예외 상황**

  - [x] 구입 금액에 대한 예외
    - [x] 입력받은 구입 금액이 1000으로 나누어 떨어지지 않는다 UserInput # moneyInput() - checkExceptCaseInMoney()
    - [] 구입 금액이 공백일 경우 UserInput # moneyInput() - isInputBlank()
    - [] 구입 금액이 0일 경우 UserInput # moneyInput() - isInputZero()
  - [] 당첨 번호에 대한 예외
    - [] 입력받은 당첨 번호에 중복이 존재할 경우 UserInput # isNotNumberDuplicate()
    - [] 당첨 번호가 쉼표(',')로 구분되지 않을 경우 UserInput # isUsingRestMark()
    - [] 로또 번호가 1부터 45 사이의 숫자가 아닐 경우 UserInput # isValidateNumberRange()

<br/>

- [] **예외 상황 메세지 출력**
  - [] [ERROR]으로 시작한다 ('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다')
