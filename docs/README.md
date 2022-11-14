## 기능 목록

- [o] 로또 번호 예외 처리 테스트 -Lotto.js/overlap()

- [o] 로또 구입 금액을 입력하면 해당하는 만큼 로또를 발행한다. -BuyLotto.js/nTimes()
  - [o] 로또 구입 금액 반환 - Buylotto.js/havePrice()
  - [o] 예외 : 나누어 떨어지지 않는 금액 + 잘못된 값 입력 -BuyLotto.js/lostPrice()
- [o] 로또 번호 1~45까지의 서로 다른 임의의 수 6자리를 뽑는다. -UserLotto.js/haveLotto()
  - [o] 로또 번호는 오름차순으로 정렬한다. -UserLotto.js/LottoSort()
- [o] 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다. -AnswerLotto.js/haveAnswer(), bonusAnswer()
- [o] 로또 번호(6자리)와 당첨 번호(6자리 + 보너스 1자리)를 비교할 수 있다. -CorrectLotto.js/haveCorrect(), haveBonus()
  - [o] 몇개의 숫자가 같은지 알 수 있다. -CorrectLotto.js/haveCorrect()
  - [o] 5개 번호가 같을 때, 보너스 번호 체크 -CorrectLotto.js/haveBonus()
  - [o] 로또 일치 개수 객체 생성 -Print.js/haveObject()
  - [o] 3개의 번호가 일치(5등-5천원) -Award.js/haveAward()
  - [o] 4개의 번호가 일치(4등-5만원) -Award.js/haveAward()
  - [o] 5개의 번호가 일치(3등-150만원) -Award.js/haveAward()
  - [o] 5개의 번호 + 보너스 번호 일치(2등-3000만원) -Award.js/haveAward()
  - [o] 6개의 번호 일치(1등-20억) -Award.js/haveAward()
- [o] 상금 개수와 일치 개수에 따라 출력한다. -Print.js/doPrint()
- [o] 당첨 내역 및 수익률을 출력한다. -Margin.js/haveMargin()
- [o] 로또 게임을 종료한다.
