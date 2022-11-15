## 기능 목록
 - [ ] 게임 시작 기능 #App play(){}

 - [ ] 로또를 구매하는 기능. 금액에 해당하는 만큼 로또 발행. #GetLotto 
   - [ ] 1장당 가격은 1,000원. #GetLotto lottoPrice(){}
   - [ ] 컴퓨터에 당첨 번호 생성한다. #GetLotto generateNum(){}
    

- [ ] 당첨 번호와 보너스 번호를 입력 받는다. #Lotto
  - [ ] 로또 번호의 숫자 범위는 1~45까지이다. #Lotto numberValue(){}
  - [ ] 로또 번호는 6자리 이상 넘어가지 않는다. #Lotto validate(){}
  - [ ] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다. #Lotto notDuplicated(){}
  - [ ] 보너스 번호도 입력 받는다. #Lotto bonusNumber(){}

- [ ] 사용자 번호와 당첨 번호를 비교하여 추첨. #DrawLots compareValue(){}
  - [ ] 당첨 내역은 1-5등까지 존재한다. #DrawLots gradeLottos(){}
  - [ ] 일치 개수 만큼 등수가 나뉘어진다. #DrawLots howGetGrade(){}
  - [ ] 나뉘어진 등수에 맞게 상금이 배분된다. #DrawLots allocatePrize(){}
  - [ ] 플레이어의 수익률이 얼만큼 되는지 알려준다. #DrawLots hasRevenue(){}

