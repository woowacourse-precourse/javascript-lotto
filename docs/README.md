# 기능 구현 목록

- [x] 중복되지 않는 당첨번호 6개 숫자를 입력한다. Input/inputWinNumber
- [x] 6개의 숫자 입력 후 보너스 번호 1개를 입력한다Input/inputBonusNumber
- [x] 구입 금액을 입력한다 Input/inputAmountMoney
- [x] 구입 금액으로 로또를 구매한다 Input/inputMoneyCount

- [x] 구입 금액에 해당하는 갯수의 로또를 발행해야 한다. Calculator / createLottoNumber
- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교해야 한다.
    - [x] 당첨 번호와 사용자가 구매한 로또 번호를 비교한다 Calculator/calWinning
    - [x] 비교하여 당첨 금액을 계산한다. Calculator/winningScore
- [x] 소수점 둘째자리 까지의 수익률을 계산한다 Calculator/calYield

- [x] 발행한 로또 수량과 번호를 출력한다 이때 번호는 오름차순 정렬되어야 한다
    - [x] 구매한 로또 개수 출력 App/printLottoCount
    - [x] 로또 당첨 결과 출력 App/printResult


 # 예외 사항  
- [x] 당첨 번호는 유효한 숫자여야함 Check/checkWinNumVaildation
    - [x] 숫자는 1과 45사이 숫자여야한다 Lotto/checkNumberRange
    - [x] 당첨번호에 중복인 숫자가 있는지 확인한다 Lotto/CheckUniqueNumber
- [x] 구입 금액이 1000원으로 나누어 져야한다 Check/checkDivideMoney
- [x] 입력되는 보너스 번호는 유효해야한다 Check/checkBonusVaildation
    - [x] 보너스 번호는 1과 45사이 숫자여야한다. Check/checkBonusNumber
    - [x] 보너스 번호는 하나 이상 입력되면 안된다. Check /checkBonusUnique


