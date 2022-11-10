# 기능 구현 목록

- [ ] 중복되지 않는 6개 숫자를 입력한다. Input/inputWinNumber
- [ ] 6개의 숫자 입력 후 보너스 번호 1개를 입력한다.Input/inputBonusNumber
- [ ] 구입 금액을 입력한다. Input/inputAmountMoney
    - [ ] 구입 금액은 1000 단위로 받아야 한다.
- [ ] 구입 금액에 해당하는 로또를 발행해야 한다.
- [ ] 사용자가 구매한 로또 번호와 당첨 번호를 비교해야 한다. compare
    - [ ] 당첨 내역을 계산하고 출력한다. calWinning
    - [ ] 수익률을 계산하고 출력한다. calYield
- [ ] 발행한 로또 수량과 번호를 출력한다. 이때 번호는 오름차순 정렬 print

 # 예외 사항  
- [ ] 숫자는 1과 45사이 숫자 CheckNumberRange
- [ ] 당첨번호 중복 여부 확인 CheckUniqueNumber
- [ ] 구입 금액이 1000원으로 나누어 져야함 CheckDivideMoney