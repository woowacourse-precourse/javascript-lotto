# 미션 - 로또

1. 구입 금액을 입력받기. (App.getInputMoney)

   - 유효한 금액인 검증하기.(App.isValidInput)
     - 유효하지 않은 경우 - 1000 단위로 나눠지지 않음 , 1000원 이하, 미입력

2. 금액 출력하기 (Printer.printMoney)

3. 금액을 1000 으로 나눠, 발행한 로또의 개수만큼, 로또 번호를 생성하기 (App.publishLotto(input/1000))

- 6개의 수를 중복 없이 생성하기.
- 수는 1-45 사이의 숫자
  => Random.pickUniqueNumbersInRange(1,45,6)

5. 생성된 로또를 출력하기.(Printer.printLottosNumbers)

6. 당첨 숫자 6개를 입력받기. (App.getWinNumbers)

   - 유효한 당첨 숫자인지 검증하기(App.isValidWinNumbers)
     - 1-45 사이의 숫자가 중복이 없이 입력 받기
     - 6개만 입력받기
     - 입력 필

7. 보너스 숫자 1개 입력받기(App.getBonusNumber)
   (App.isValidBonusNumber)

   - 유한 보너스 숫자인지 검증하기(App.isValidBonusNumber)
     - 기존 6개와 중복 허용하지 않음.
     - 1-45 사이의 숫자
     - 1개만
     - 입력 필

8. 로또 당첨 확인하기 (App.matchLottos)

   - 동일한 숫자 체크 (Lotto.compareNumbers)

9. 로또 결과 (갯수, 수익률) 출력하기 (Printer.printScore, Printer.printRevenue)

10. 수익률 계산하기 (Calculator.conductRevenue)

11. 게임 종료 (App.gameOver)
