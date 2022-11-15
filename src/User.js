const MissionUtils = require('@woowacourse/mission-utils')

class User{
  #investment
  #revenue
  #lottos = []

  constructor(investment) {
    this.#investment = investment
    this.#revenue = 0
  }

  addLotto(lotto){
    this.#lottos.push(lotto)
  }

  printLottos(){
    MissionUtils.Console.print(`${this.#lottos.length}개를 구매했습니다`)
    this.#lottos.forEach(lotto => {
      lotto.printLotto()
    })
  }

  printMatches(matchNumbers, bonusNumber){
    const matchedLottos = [0,0,0,0,0]
    this.#lottos.forEach(lotto => {
      const {matches, bonus} = lotto.getMatch(matchNumbers, bonusNumber)
      if(matches < 3)return

      switch(matches){
        case 3:
          matchedLottos[0]++
          this.#revenue += 5_000
          break
        case 4:
          matchedLottos[1]++
          this.#revenue += 50_000
          break
        case 5:
          if(bonus === 1){
            matchedLottos[2]++
            this.#revenue += 1_500_000
          }else{
            matchedLottos[3]++
            this.#revenue += 30_000_000
          }
          break
        case 6:
          matchedLottos[4]++
          this.#revenue += 2_000_000_000
          break
      }
    })
    MissionUtils.Console.print('당첨 통계\n---')
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${matchedLottos[0]}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${matchedLottos[1]}개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${matchedLottos[2]}개`)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchedLottos[3]}개`)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${matchedLottos[4]}개`)
  }

  printRateOfReturn(){
    const rateOfReturn = (this.#revenue - this.#investment)/this.#investment * 100
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다`)
  }
  
}

module.exports = User