# 미션 - 로또

1. 구입 금액을 입력받기. (getInputMoney(), inputMoney)

   - 유효한 금액인 검증하기.(isValidInput())
     - 유효하지 않은 경우 - 1000 단위로 나눠지지 않음 , 1000원 이하, 미입력

2. 금액을 1000 으로 나눠, 발행한 로또의 개수를 저장하기. (lottoCount)

3. 발행한 로또의 개수만큼, 로또 번호를 생성하기 (publishLotto)

   - 6개의 수를 중복 없이 생성하기.
   - 수는 1-45 사이의 숫자

4. 생성된 로또를 출력하기.(printLottosNumbers)

5. 당첨 숫자 6개를 입력받기. (getWinNumbers)
   (isValidWinNumbers)

   - 1-45 사이의 숫자가 중복이 없이 입력 받기
   - 6개만 입력받기
   - 입력 필

6. 보너스 숫자 1개 입력받기(getBonusNumber)
   (isValidBonusNumber)

   - 기존 6개와 중복 허용하지 않음.
   - 1-45 사이의 숫자
   - 1개만
   - 입력 필

7. 가진 로또 번호와 비교하기

   - 동일한 숫자 체크 (matchLottos)
   - 수익 누적 (calculateProfit)

8. 로또 결과 (등수, 갯수, 수익률) 출력하기 (printScore)

9. 수익률 계산하기 (calculateProfit)

10. 게임 종료
