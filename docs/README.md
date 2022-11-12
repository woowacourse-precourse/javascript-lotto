# 기능 구현 목록

- [x] 중복되지 않는 당첨번호 6개 숫자를 입력한다. Input/inputWinNumber
- [x] 6개의 숫자 입력 후 보너스 번호 1개를 입력한다.Input/inputBonusNumber
- [x] 구입 금액을 입력한다. Input/inputAmountMoney
- [x] 구입 금액으로 로또를 구매한다. Input/inputMoneyCount


- [x] 구입 금액에 해당하는 갯수의 로또를 발행해야 한다. Calculator / createLottoNumber
- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교해야 한다. 
    - [x] 당첨 번호와 사용자가 구매한 로또 번호를 비교한다. Calculator/calWinning
    - [x] 비교하여 당첨 금액을 계산한다. Calculator/winningScore
- [x] 수익률을 계산하고 출력한다. Calculator/calYield

- [x] 발행한 로또 수량과 번호를 출력한다. 이때 번호는 오름차순 정렬 print

 # 예외 사항  
- [x] 당첨 번호는 유효한 숫자여야함 Check/checkWinNumVaildation
    - [x] 숫자는 1과 45사이 숫자 Check/checkNumberRange
    - [x] 당첨번호 중복 여부 확인 Lotto/CheckUniqueNumber
- [x] 구입 금액이 1000원으로 나누어 져야함 Check/checkDivideMoney


