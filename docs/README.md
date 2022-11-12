## 🚩기능 목록

- 앱 기동하기 (App; play())
- 구입 금액 입력받기 (UI; getCash())
  - ERROR: 금액이 올바르지 않다면 오류 발생시키기
- 로또 구입하기 (LottoCompany; publishLotto())
  - 몇 장이 필요한지 확인하기 (LottoCompany; countBuyablePapers())
  - 한 장 구입하기(LottoCompany; makeLotto())
    - 1~45 범위에서 중복되지 않는 숫자 6개 뽑기(LottoCompany; getRandomNumbers())
    - 로또 찍기(Lotto)
  - 발행한 번호 출력하기 (UI; printPurchasedLottoPapers())
- 당첨 번호 입력받기(UI; getWinnigNumbers())
  - ERROR: 범위에 맞지 않거나 중복되면 오류 발생시키기
- 보너스 번호 입력받기(UI; getBonusNumber())
  - ERROR: 범위에 맞지 않거나 중복되면 오류 발생시키기
- 당첨 내역 계산하기(Stats)
  - 일치하는 번호 개수 세기(Stats; countCorrectNumbers())
  - 그 수에 따라 등수 반환하기(Stats; gather())
  - 수익률 계산하기(Stats; getPerformance())
- 당첨 통계 출력하기(UI; showStats())
