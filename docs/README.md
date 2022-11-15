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
- [x] 로또 구입 금액이 1000원으로 나누어 떨어지지 않는 경우 - App.js # isDividedByTen()
- [x] 입력받은 당첨 번호가 6개가 아닌 경우 - Lotto.js # checkLength()
- [x] 입력받은 당첨 번호가 중복인 경우 - Lotto.js # checkDuplicate()
- [x] 입력받은 당첨 번호가 1 ~ 45 범위를 벗어나는 경우 - Lotto.js # checkRange()
- [x] 입력받은 보너스 번호가 숫자가 아닌 경우 - Bonus.js # checkIsNumber()
- [x] 입력받은 보너스 번호가 1 ~ 45 범위를 벗어나는 경우 - Bonus.js # checkRange()
- [x] 입력받은 보너스 번호가 당첨 번호와 중복되는 경우 - Bonus.js # checkDuplicate()
```

## 피드백 관련 유의 사항

```
- 함수가 하나의 일을 하도록 최대한 작게 분리한다.
- 제출 전, README 마크다운문법을 통한 작성 필요
- 예외적 상황에 대해서도 기능목록에 정리해야 한다.
- 값을 하드코딩 하지 않는다.
- 클래스는 필드, 생성자, 메소드 순서대로 작성한다.
```

## 프로그래밍 요구 사항

```
- 자바스크립트 코드 컨벤션을 준수하며 코딩한다.
- 함수의 길이가 15라인을 넘지 않도록 유의한다.
- else 를 지양한다.
- 도메인 로직에 대한 단위 테스트를 구현한다.
- 제공된 lotto class를 이용해서 기능을 구현한다.
```
