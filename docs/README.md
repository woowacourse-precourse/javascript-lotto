## 📝 **기능 목록**

### ✅ App Class : 로또 구매 및 번호 자동생성, 당첨번호 입력

### ✅ Lotto Class : 로또 결과 계산 및 출력

1. 로또를 얼마나 구매할 것인지 입력받는다. (App.lottoAmount)
   -> 로또 한 장의 가격은 1000원이다.
   -> 1000원으로 나누어 떨어지지 않는 금액을 입력받으면 Error.
   -> 공백 및 null 입력도 예외처리한다.

2. 랜덤으로 구입한 수량만큼의 로또 번호를 출력 및 저장한다. (App.autoLottoNums)
   -> 숫자 범위는 1~45이며, 중복되지 않는 6개의 숫자이다.

3. 당첨 번호를 입력받는다. (App.inputWinningNums)
   -> 숫자 범위는 1~45이며, 중복되지 않는 6개의 숫자이다.
   -> 각 숫자들을 쉼표로 구분한다.

4. 당첨번호 예외처리 (Lotto.validate)
   -> 중복, 범위, isNaN, 갯수 check
   -> 공백 및 null 입력도 예외처리한다.

5. 보너스 번호를 입력받는다. (App.inputBonusNums)
   -> 숫자 범위는 1~45이며, 당첨 번호와 중복되지 않는 1개의 숫자이다.

6. 보너스 번호 예외처리 (Lotto.bonusNumberException)
   -> 중복, isNaN, 갯수, 범위 check
   -> 공백 및 null 입력도 예외처리한다.

7. 배열에 주어진 숫자와 같은 숫자가 있으면 그 수를 세는 메소드를 구현한다. (Lotto.isMatching)
   -> 로또 당첨번호와 보너스 번호 비교에서 겹치는 부분을 메소드로 분리.

8. 위 메소드를 이용하여 당첨번호와 내가 구매한 로또의 번호들을 비교한다. (Lotto.compareLottoNums)
   -> 새 배열의 로또 인덱스에 해당하는 인덱스에다가 로또 번호가 일치하는 갯수를 저장.

9. 로또 번호 5개 일치 시 보너스 번호 포함 여부를 비교한다. (Lotto.compareBonus)

10. 각 당첨갯수 별 로또 수를 센다. (Lotto.countWinLotto)
    -> 갯수 출력을 위해.

11. 수익률을 계산한다. (Lotto.priceEarningsRatio)
    -> 수익률 = (로또에 당첨되어 얻은 돈) / (로또 구매 금액)

12. 결과를 출력한다. (Lotto.printWinResult)
