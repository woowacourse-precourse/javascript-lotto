// 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
// 로또 1장의 가격은 1,000원이다.
// 당첨 번호와 보너스 번호를 입력받는다.
// 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
// 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 종료한다.


const Lotto = require('./Lotto')
const Check = require('./Check')
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 보너스번호
  bonusNumber(){
    let BONUS = 0
    MissionUtils.Console.readLine('',(bonus) => {
      MissionUtils.Console.print('보너스 번호를 입력해 주세요')
      BONUS = bonus
    })
    console.log(BONUS)
    return BONUS
  }
  
  // 당첨번호
  winNumber(){
    let WIN_NUMBER = 0
    MissionUtils.Console.readLine('',(winNum) => {
      MissionUtils.Console.print(`당첨 번호를 입력해 주세요.`)
      console.log(winNum)
      WIN_NUMBER = winNum.split(",")
      // 유효성 검사
      const LottoCheck = new Lotto(WIN_NUMBER)
      LottoCheck.setCheck()
    })
    return WIN_NUMBER
  }
  
  // 로또 번호 출력
  lottoNumbers(times){
    let lottoNumbersArray = []
    for (let i = 0; i < times; i ++){
      let LOTTO_NUM = this.createLottoNumber()
      console.log(LOTTO_NUM)
      lottoNumbersArray.push(LOTTO_NUM)
    }
    return lottoNumbersArray
  }

  // 로또 번호 생성
  createLottoNumber(){
    let lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)

    // 유효성 검사
    const LottoCheck = new Lotto(lottoNum)
    LottoCheck.setCheck()
    return lottoNum
  }


  // 로또 구입
  buyLotto(money) {
    let LOTTO_AMOUNT = 0
    let LOTTO_ARRAY = []
    const checking = new Check()
    LOTTO_AMOUNT = checking.buyLotto(money)
    MissionUtils.Console.print(`${LOTTO_AMOUNT}개를 구매했습니다.`)
    LOTTO_ARRAY = this.lottoNumbers(LOTTO_AMOUNT)
    return LOTTO_ARRAY
  }

  // 로또 구입 금액
  money() {
    let MONEY = 0
    let LOTTO_ARRAY = []
    MissionUtils.Console.readLine('', (number) => {
      const checking = new Check()
      checking.checkNumbers(number)
      console.log(`${number}`)
      MONEY = number
    })
    LOTTO_ARRAY = this.buyLotto(MONEY)
    return LOTTO_ARRAY
  }

  // Play
  play() {
    let LOTTO_ARRAY  = []
    let WIN_NUMBER = []
    let BONUS = 0
    // Start
    MissionUtils.Console.print("구입금액을 입력해 주세요.")
    LOTTO_ARRAY = this.money()
    WIN_NUMBER = this.winNumber()
    BONUS = this.bonusNumber()

    MissionUtils.Console.print("당첨 통계")
    MissionUtils.Console.print("---")
    this.statistics(LOTTO_ARRAY,WIN_NUMBER,BONUS)
  }

  // statistics
  statistics(lottoArray,winNumber,bonus){
    
  }
}

module.exports = App;
