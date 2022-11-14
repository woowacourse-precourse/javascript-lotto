const Lotto = require('./Lotto')
const Check = require('./Check')
const Stat = require('./Statistics')

const MissionUtils = require("@woowacourse/mission-utils");

class App {

  bonusNumber(){
    let BONUS = 0
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.',(bonus) => {
      MissionUtils.Console.print('보너스 번호를 입력해 주세요.')
      BONUS = bonus
    })
    MissionUtils.Console.print(BONUS)
    return BONUS
  }
  
  winNumber(){
    let WIN_NUMBER = 0
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.',(winNum) => {
      MissionUtils.Console.print(`당첨 번호를 입력해 주세요.`)
      MissionUtils.Console.print(winNum)
      WIN_NUMBER = winNum.split(",")

      const LottoCheck = new Lotto(WIN_NUMBER)
      LottoCheck.setCheck()
    })
    return WIN_NUMBER
  }
  
  lottoNumbers(times){
    let lottoNumbersArray = []
    for (let i = 0; i < times; i ++){
      let LOTTO_NUM = this.createLottoNumber()
      MissionUtils.Console.print(`[${LOTTO_NUM.join(", ")}]`)
      lottoNumbersArray.push(LOTTO_NUM)
    }
    return lottoNumbersArray
  }

  createLottoNumber(){
    let lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)

    const LottoCheck = new Lotto(lottoNum)
    LottoCheck.setCheck()
    return lottoNum
  }

  buyLotto(money) {
    let LOTTO_AMOUNT = 0
    let LOTTO_ARRAY = []
    const checking = new Check()
    LOTTO_AMOUNT = checking.buyLotto(money)
    MissionUtils.Console.print(`${LOTTO_AMOUNT}개를 구매했습니다.`)
    LOTTO_ARRAY = this.lottoNumbers(LOTTO_AMOUNT)
    return LOTTO_ARRAY
  }

  money() {
    let MONEY = 0
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (number) => {
      const checking = new Check()
      checking.checkNumbers(number)
      MissionUtils.Console.print(`${number}`)
      MONEY = number
    })
    return MONEY
  }

  play() {
    let MONEY = 0
    let LOTTO_ARRAY  = []
    let WIN_NUMBER = []
    let BONUS = 0
    MissionUtils.Console.print("구입금액을 입력해 주세요.")
    MONEY = this.money()
    LOTTO_ARRAY = this.buyLotto(MONEY)
    WIN_NUMBER = this.winNumber()
    BONUS = this.bonusNumber()

    MissionUtils.Console.print("당첨 통계")
    MissionUtils.Console.print("---")
    let RESULT = this.statistics(LOTTO_ARRAY,WIN_NUMBER,BONUS)
    this.yield(MONEY,RESULT)
  }

  yield(money,result){
    let ANSWER = ( result / money ) * 100
    MissionUtils.Console.print(`총 수익률은 ${ANSWER}%입니다.`)
    MissionUtils.Console.close()
  }

  statistics(lottoArray,winNumber,bonus){
    let RESULT = {
      '1' : 0,
      '2' : 0,
      '3' : 0,
      '4' : 0,
      '5' : 0
    }
    for (let lotto of lottoArray) {
      const match = new Stat(lotto,winNumber,bonus)
      RESULT[match.checkMatch()] += 1
    }
    return this.printResult(RESULT)
  }

  printResult(result){
    let TOTAL_MONEY = 0
    result = Object.entries(result).reverse()
    for ( let key of result) {
      if (key[0] === 'undefined') {
        continue
      }
      this.ResultSwitch(key)
      TOTAL_MONEY += this.total(key)
    }
    return TOTAL_MONEY
  }

  ResultSwitch(key){
    switch(key[0]){
      case '5':
        return MissionUtils.Console.print(`3개 일치 (5,000원) - ${key[1]}개`)
      case '4':
        return MissionUtils.Console.print(`4개 일치 (50,000원) - ${key[1]}개`)
      case '3':
        return MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${key[1]}개`)
      case '2':
        return MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${key[1]}개`)
      case '1':
        return MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${key[1]}개`)
    }
  }
  total(key){
    if (key[1] === 0){
      return 0
    }
    return this.totalSwitch(key)
  }
  totalSwitch(key){
    switch(key[0]){
      case '5':
        return 5000
      case '4':
        return 50000
      case '3':
        return 1500000
      case '2':
        return 30000000
      case '1':
        return 2000000000
    }
  }
}

module.exports = App;
