🚀 기능 요구 사항

로또#Lotto

- [x] 로또를 발행하는 기능 - createLottoNum
      1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
      자동생성 되는 클래스와 테스트를 위해서 생성자로 초기화 해주는 기능을 따로 구현
      오름차순으로 정렬한다.

- [x] 생성자를 이용해 로또 발행이 되면 번호를 검증 해주는 기능 - validate
      6자리 인지 확인
      중복된 숫자가 있는지
      1~45 사이의 숫자 인지

- [x] 자신의 로또 번호를 출력한다.

로또구매#LottoBuy

- [x] 구입 금액을 입력 받는 기능 - inputPurchasePrice
      로또 한장당 1000원이다.
- [x] 예외 처리 -validate
      1000원으로 떨어지지 않을 시 예외처리
      숫자인지 확인
- [x] 로또를 발행하는 기능 - createMyLottos
- [x] 발행된 로또를 출력하는 기능 - printLottos
  - Lotto 클래스를 받고 출력

로또 당첨번호 설정#LottoSetting

- [ ] 당첨번호를 입력 받는 기능 - inputWinLottoNum
      당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.
- [x] 당첨번호를 배열로 리턴하는 기능 - exportWinLottoArray
- [ ] 보너스 번호를 입력받는 기능 - inputBonusNum

로또 계산#LottoCalculator

- [ ] 로또번호를 비교하는 기능 - compareLotto
- [ ] 당첨 내역을 출력하는 기능 - printWinResult
- [ ] 수익률을 계산하는 기능 - printGainPercent

예외처리 기능

**예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.**

- [x] 구입 금액을 입력 받는 기능 : 1000원으로 나누어 떨어지지 않는 경우 예외처리 하는 기능 -isValidPrice
- [ ] 당첨번호를 입력 받는 기능 : 로또 숫자가 아니면 예외처리 하는 기능 - isLottoNum
- [ ] 보너스 번호를 입력받는 기능 : 중복숫자를 넣으면 예외처리 하는 기능 - isValidBonusNum
