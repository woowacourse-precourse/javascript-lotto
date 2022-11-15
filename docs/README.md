기능 구현 목록 
1. 1000원 단위의 로또 구입금액을 입력 받는다.[x] - cost()=>money
2. 입력받은 구입금액이 1000원이상의 1000원 단위 인지 검사한다.[x]-costVaildate(money)
    - 아닐경우 예외처리[x]
3. 발행해야하는 로또의 갯수를 계산한다.[x]-purchasesCount(money) => number
4. 로또번호를 추출하는 기능을 구현한다.[x]-createLottoNumber(number) => lottoList=[]
5. 추출한 로또번호를 출력한다.[x]-printLottoList(lottoList)
6. 로또당첨 번호를 입력받는다.[x]-getWiningNumbers() =>getWining
    -입력받은 로또당첨 번호를 검사한다.[x]-validate(getWining)
7. 보너스 번호를 입력 받는다.[x]-getBonusNumber()=> getBonus
    -로또 번호와 보너스 번호를 검사한다.[x]-bonusNumberValidate(getWining,getBonus)
8. 추출한 로또 번호와 당첨번호를 비교한다.[x]-compare()
9. 수익률을 계산한다. 당첨금액/구입금액*100[x]-compare()
10. 결과를 출력한다.[x]-resultPrint