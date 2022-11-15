## 기능 목록
###App 
 - [ ] 게임 시작 기능 play(){}

###Player
- [ ] 당첨 번호와 보너스 번호를 입력 받는다. 
  - [ ] 보너스 번호도 입력 받는다. bonusNumber(){}

###GetLotto
 - [ ] 로또를 구매하는 기능. 금액에 해당하는 만큼 로또 발행.  
   - [x] 1장당 가격은 1,000원.
   - [x] 로또를 구매하기 위해 정당한 가격을 냈는가.
   - [x] 컴퓨터에 당첨 번호 생성한다. generateLottoNum(){}

###Lotto
  - [x] 로또 번호는 숫자이여야 한다. numberValue(){}
  - [x] 로또 번호의 숫자 범위는 1~45까지이다. numberRange(){}
  - [x] 로또 번호는 6자리 이상 넘어가지 않는다. validate(){}
  - [x] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다. notDuplicated(){}

###DrawLots
- [ ] 사용자 번호와 당첨 번호를 비교하여 추첨.  compareValue(){}
  - [ ] 당첨 내역은 1-5등까지 존재한다. gradeLottos(){}
  - [ ] 일치 개수 만큼 등수가 나뉘어진다. howGetGrade(){}
  - [ ] 나뉘어진 등수에 맞게 상금이 배분된다. allocatePrize(){}
  - [ ] 플레이어의 수익률이 얼만큼 되는지 알려준다. hasRevenue(){}

