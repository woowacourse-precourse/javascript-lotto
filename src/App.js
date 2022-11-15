const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto')


const START_MESSAGE = '구입금액을 입력해 주세요.'
const BUY_MESSAGE= '개를 구매했습니다.'
const NUMBER_PLEASE = '당첨 번호를 입력해 주세요.'
const BONUS_NUMBER_PLEASE = '보너스 번호를 입력해 주세요.'
const STATISTICS = '당첨통계'
const DIVIDING_LINE = '---'
const TICKET_PRICE = 1000
const REWARD_MESSAGE = [
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '6개 일치 (2,000,000,000원) - '
]
const PRIZE = [
  5000,
  50000,
  1500000,
  30000000,
  2000000000
]

class App {
  money
  lottos
  lottoSize
  winningNumber
  bonusNumber
  winning = Array.from({ length: 5 }, () => 0)
  reward = 0

  play() { 
    this.readLineAndWrite(START_MESSAGE, 'money')

    this.validate(this.money)
    
    this.numberOfTickets()
    this.buyLotto(this.lottoSize)

    this.print(`${this.lottoSize}${BUY_MESSAGE}` )
    this.printArr(this.lottos)

    this.readLineAndWrite(NUMBER_PLEASE, 'winningNumber')
    this.readLineAndWrite(BONUS_NUMBER_PLEASE, 'bonusNumber')

    this.matchLotto(this.lottos)
    
    this.printAll([STATISTICS, DIVIDING_LINE])

    this.rewardCalculate()

    this.rateOfReturn()

    return
  }
  rateOfReturn() {
    const a = ((this.reward / (this.lottoSize*TICKET_PRICE)) * 100).toFixed(1)
    this.print(`총 수익률은 ${a}%입니다.`)
  }
  rewardCalculate() {
    for (let i in this.winning) {
      const num = this.winning[i]
      this.print(`${REWARD_MESSAGE[i]}${num}개`)

      this.reward += (num * PRIZE[i])
    }
  }

  matchLotto(arr) {
    const winnum = new Set(this.winningNumber.split(','))

    let i = 0
    while(i < this.lottoSize) {
      const count = this.countMatch(winnum, arr[i])
      this.isWinning(count[0], count[1])
      i++
    }
  }

  isWinning(num, bonusNum) {
    switch(num) {
      case 3: 
        this.winning[0] += 1
        break;
      case 4: 
        this.winning[1] += 1
        break;
      case 5: 
        if (bonusNum === 1) {
          this.winning[3] += 1
        }
          this.winning[2] += 1
        break;
      case 6: 
        this.winning[4] += 1
        break;
    }
  }
  
  countMatch(winnum, arr) {
    let count = 0, bonusCount = 0
    for (let num of arr) {
      if (winnum.has(num+'')) count += 1
      if (this.bonusNumber == num) bonusCount += 1    
    }
    return [count, bonusCount]
  }

  buyLotto(num) {
    const res = []
    for (let i = 0; i < num; i++) {
      const numbers = this.drawSixNumbers().sort((a,b) => a-b)
      const lottery = new Lotto(numbers)
      res.push(lottery.getNumbers())
    }
    this.lottos = res
  }  

  drawSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  numberOfTickets() {
    this.lottoSize = Math.floor(this.money / TICKET_PRICE)
  }
  
  printAll(arr) {
    for (let str of arr) {
      this.print(str)
    }
  }
  printArr(arr) {
    for (let str of arr) {
      const string = str.join(', ')
      this.print(`[${string}]`)
    }
  }
  print(str) {
    MissionUtils.Console.print(`${str}`)
  }

  validate(str) {
    let res = false
    for (let char of str) {
      if (!(char <= 9 && char >= 0)) {
        throw ('[ERROR]');
      }
    }
    return res
  }

  readLineAndWrite = (str, name) => {
    MissionUtils.Console.readLine('', (answer) => {
      this.print(answer)
      this.write(answer, name)
      this.consoleClose()
    })
  }
  write(str, name) {
    this[name] = str
  }

  consoleClose() {
    MissionUtils.Console.close()
  }
}

module.exports = App;
