## **기능 목록**

### App Class : 로또 구매 및 번호 자동생성, 당첨번호 입력

### Lotto Class : 로또 결과 계산 및 출력

1. 로또를 얼마나 구매할 것인지 입력받는다. (App.lottoAmount)
2. 랜덤으로 구입한 수량만큼의 로또 번호를 출력 및 저장한다. (App.autoLottoNums)
3. 당첨 번호를 입력받는다. (App.inputWinningNums)
4. 당첨번호 예외처리 (Lotto.validate)
5. 보너스 번호를 입력받는다. (App.inputBonusNums)
6. 보너스 번호 예외처리 (Lotto.bonusNumberException)
7. 배열에 주어진 숫자와 같은 숫자가 있으면 그 수를 세는 메소드를 구현한다. (Lotto.isMatching)
8. 위 메소드를 이용하여 당첨번호와 내가 구매한 로또의 번호들을 비교한다. (Lotto.compareLottoNums)
9. 로또 번호 5개 일치 시 보너스 번호 포함 여부를 비교한다. (Lotto.compareBonus)
10. 각 당첨갯수 별 로또 수를 센다. (Lotto.countWinLotto)
11. 수익률을 계산한다. (Lotto.priceEarningsRatio)
12. 결과를 출력한다. (Lotto.printWinResult)
