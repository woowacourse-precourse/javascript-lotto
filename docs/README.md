## 🚀기능 목록 리스트

```
1. [x] 사용자에게 로또 구입 금액을 입력 받는다. - inputPurchaseAmount()

2. [x] 사용자가 구매한 로또 개수를 얻는다 - getPurchaseCount()

3. [x] 얻은 로또 개수를 출력한다 - printPurchaseCount()

4. [x] 구매 금액에 따른, 전체 로또 번호 리스트를 얻는다 - getLottoList()

5. [x] 얻은 로또 번호 리스트를 출력한다. - printLottoList()

5. [x] 사용자에게 당첨 번호를 입력받는다 - inputWinNumber()

6. [x] 사용자에게 보너스 번호를 입력받는다 - inputBonusNumber()

7. [x] 사용자의 당첨 번호와 로또 리스트를 비교한다. - compare()

8. [x] 비교하여 전체 등수(rank)를 얻는다. - getRank()

9. [x] 등수에 따라 당첨 통계를 출력한다. - printResult()

10 [x] 수익률을 계산한다. - getProfit()

11.[x] 수익률을 출력한다. - printProfit()

12.[x] 프로그램을 종료한다. - close()
```

## 🚀예외 처리 기능 리스트

```
- [x] 로또 구입 금액이 숫자가 아닌 경우 - PurchaseAmount.js # isDividedByTen()

- [x] 로또 구입 금액이 1000원으로 나누어 떨어지지 않는 경우 - PurchaseAmount.js # isDividedByTen()

- [x] 로또 구입 금액이 비어있는 경우(입력이 비어있는 경우) - PurchaseAmount.js # isEmpty()

- [x] 입력받은 당첨 번호가 6개가 아닌 경우 - Lotto.js # checkLength()

- [x] 입력받은 당첨 번호가 중복인 경우 - Lotto.js # checkDuplicate()

- [x] 입력받은 당첨 번호가 1 ~ 45 범위를 벗어나는 경우 - Lotto.js # checkRange()

- [x] 입력받은 보너스 번호가 숫자가 아닌 경우 - Bonus.js # checkIsNumber()

- [x] 입력받은 보너스 번호가 1 ~ 45 범위를 벗어나는 경우 - Bonus.js # checkRange()

- [x] 입력받은 보너스 번호가 당첨 번호와 중복되는 경우 - Bonus.js # checkDuplicate()
```
