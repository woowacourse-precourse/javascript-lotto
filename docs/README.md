# 로또 요구사항

## 기능 목록

1. [x] 사용자로부터 로또 구입 금액을 입력받는다. - User#buyLotto()
   - [x] 예외상황[ERROR]: - User#isValidPurchase(amount)
     - [x] 1,000원으로 나누어 떨어지지 않는 경우 - Validation#isDivisible(number)
     - [x] 금액 단위가 Number.MAX_SAFE_INTEGER보다 큰 경우 - Validation#isMaxPurchase(number)
     - [x] 금액이 양의 정수가 아닌 경우 - Validation#isPositiveInteger(number)
2. [x] 사용자의 로또 구입 금액에 해당하는 만큼 로또를 발행한다. - User#generateLottoNumbers(numberOfPurchase)
   1. [x] 1과 45까지의 정수 범위 내에서 난수를 6개 생성하여 배열에 저장한다. - User#randomSortedNumbers()
   2. [x] 위 i.에서의 난수 배열을 오름차순으로 정렬한다. - User#randomSortedNumbers()
   3. [x] 로또 발행 수만큼의 난수 배열이 생성되었으면 이를 출력한다. - User#showLottoNumbers()
3. [ ] 로또 당첨 번호 6자리를 입력 받는다(추첨).
   1. [ ] 쉼표로 구분하므로 당첨 번호는 숫자 배열로 쪼개어 저장한다
   - [ ] 예외 상황[ERROR]:
     - [ ] 1부터 45까지의 정수 범위를 벗어나는 경우
4. [ ] 보너스 번호를 입력 받는다.
   - [ ] 예외 상황[ERROR]:
     - [ ] 1부터 45까지의 정수 범위를 벗어나는 경우
5. [ ] 사용자의 발행된 로또와 로또 당첨 번호를 비교한다.
   1. [ ] 3개, 4개, 5개, 5개(+ 보너스 번호 일치), 6개 일치 별로 각각의 당첨 횟수를 연산한다.
   2. [ ] 당첨 횟수 \* 해당 당첨 금액의 합계 / 로또 구입 금액을 계산하여 총 수익률을 계산하고 소수점 둘째 자리에서 반올림한다.
   3. [ ] 위에서 계산한 해당 결과 내역 및 당첨 통계를 출력한다.
6. [ ] 당첨 통계 출력 후 프로그램을 종료한다. 예외 상황[ERROR]의 경우 throw를 통해 프로그램을 종료시킨다

## 클래스 목록

1. App: 프로그램 시작 지점
2. User: 사용자 입력(로또 구입 금액, 로또 발행)
3. Lotto: 로또 당첨 번호
4. WinningsReader: 당첨금 통계 계산기
