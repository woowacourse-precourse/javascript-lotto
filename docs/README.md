# 로또

## 💼 기능 목록

### 📍 도메인

- [x] 유효한 로또 구입 금액을 입력받는다 - Purchase#validate()

  - [x] e) 로또 금액이 숫자가 아닌 경우
  - [x] e) 로또 금액이 0보다 작은 경우
  - [x] e) 로또 금액 금액이 1000원으로 나누어 떨어지지 않는 경우

- [x] 숫자를 랜덤하게 뽑아 오름차순 정렬한다. - MyLotto#generateRandom()

  - [x] 숫자는 중복되지 않는다.
  - [x] 숫자는 1 ~ 45 사이이다.
  - [x] 숫자는 6개이다.

- [x] 유효한 숫자 6개를 입력받는다. - Lotto#validate()

  - [x] e) 숫자 범위가 1 ~ 45가 아닌 경우
  - [x] e) 숫자가 6개가 아닌 경우
  - [x] e) 중복이 존재하는 경우

- [x] 유효한 보너스 번호를 입력받는다. - Bonus#validate()

  - [x] e) 숫자 범위가 1 ~ 45가 아닌 경우

- [x] 로또 번호와 당첨 번호를 비교한다. - Result#compare()

  - [x] 3개 일치 : 5,000원
  - [x] 4개 일치 : 50,000원
  - [x] 5개 일치 : 1,500,000원
  - [x] 5개 일치 + 보너스 번호 일치 : 30,000,000원
  - [x] 6개 일치 : 2,000,000,000원

### 📍 서비스

- [x] 로또 구입 금액/1000개를 구매했다는 메시지를 띄운다. -
      Service#printLottoCount()

- [x] 중복되지 않은 6개의 숫자를 로또 구매 개수만큼 출력한다. -
      Service#printLottoNumbers()

- [x] 당첨 번호 입력 메시지를 띄운다. - Service#printGetWinningNumber();

- [x] 보너스 번호 입력 메시지를 띄운다. - Service#printGetBonusNumber();

- [x] 당첨 통계를 출력한다. - Service#printResult()
