const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto')

class App {
  play() {
    purchaseLotto()

  }
}
function purchaseLotto() {
  MissionUtils.Console.readLine('금액을 입력해 주세요', (money)=>{
    exceptionMoney(money)
    return makeLottoList(money)
  })
}

function makeLottoList(money) {
  MissionUtils.Console.print(`${money/1000}개를 구매했습니다.`)
  const LOTTO_LIST = []
  for (let i = 0; i < money/1000; i++){
    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=> {
      if(a>b){return 1}
      if(a<b){return -1}
    })
    MissionUtils.Console.print(`[${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}, ${numbers[5]}]`)
    LOTTO_LIST.push(numbers)
  }
  MissionUtils.Console.close()
  
  return winningList(LOTTO_LIST)
}

function winningList (LOTTO_LIST) {
  MissionUtils.Console.readLine('당첨 번호를 입력해 주세요', (winning_Number)=>{
    const WINNING_LIST = winning_Number.split(',').map(item => parseInt(item))
    exceptionWinning(WINNING_LIST)
    return makeBonusNumber(LOTTO_LIST, WINNING_LIST)
  })
}
function makeBonusNumber (LOTTO_LIST, WINNING_LIST){
  MissionUtils.Console.readLine('보너스 번호를 입력해 주세요', (bonus_Number)=>{
    exceptionBonus(WINNING_LIST, bonus_Number)
    return WinningCheck(LOTTO_LIST, WINNING_LIST, bonus_Number)
  })
}

function WinningCheck (LOTTO_LIST, WINNING_LIST, bonus_Number) {
  let winningPoint = [0, 0, 0, 0, 0]
  LOTTO_LIST.forEach((item)=>{
    let COUNT = 0
    let BONUS = 0
    item.forEach((idx)=>{
      if(WINNING_LIST.includes(idx)){COUNT ++}
      if(idx == bonus_Number){BONUS = 1}
    })
    countcheck(COUNT, BONUS, winningPoint)
  })
  return resultPrint(LOTTO_LIST, winningPoint)
}

function countcheck(COUNT, BONUS, winningPoint){
  switch (COUNT) {
    case 3:
      winningPoint[0]++
      break;
    case 4:
      winningPoint[1]++
      break;
    case 5:
      winningPoint[2]++
      break;
    case 6:
      winningPoint[4]++
      break;
  }
  if (COUNT == 5 && BONUS>0) {
    winningPoint[2]--
    winningPoint[3]++
  }
}
function resultPrint(LOTTO_LIST, winningPoint) {
  let value = 5000*winningPoint[0] + 50000*winningPoint[1] + 1500000*winningPoint[2] + 30000000*winningPoint[3] + 2000000000*winningPoint[4]
  let dummy = LOTTO_LIST.length*1000
  MissionUtils.Console.print(`당첨 통계`)
  MissionUtils.Console.print('---')
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningPoint[0]}개`)
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningPoint[1]}개`)
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningPoint[2]}개`)
  MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningPoint[3]}개`)
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningPoint[4]}개`)
  MissionUtils.Console.print(`총 수익률은 ${value*100/dummy.toFixed(1)}%입니다.`)
  MissionUtils.Console.close()
}

function exceptionMoney(money) {
  if (isNaN(money)){
    throw '[ERROR] 숫자만 입력해 주세요'
  }
  if (money%1000 > 0){
    throw '[ERROR] 금액은 1,000원 단위로 입력해야 합니다.'
  }
}

function exceptionWinning(WINNING_LIST){
  WINNING_LIST.forEach((item)=>{
    if(isNaN(item)){
      throw '[ERROR] 로또 번호는 숫자만 입력해야 합니다.'
    }
  })
  if (WINNING_LIST.some(item => item > 45)){
    throw '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
  }
  if (WINNING_LIST.length !== 6) {
    throw '[ERROR] 로또 번호는 6개여야 합니다.'
  }
  if ([...new Set(WINNING_LIST)].length !== 6) {
    throw '[ERROR] 로또 번호는 서로 다른 6개여야 합니다.'
  }
}
function exceptionBonus(WINNING_LIST, bonus_Number){
  if(isNaN(bonus_Number)){
    throw '[ERROR] 보너스 번호는 숫자만을 입력해 주세요.'
  }
  if(bonus_Number>45){
    throw '[ERROR] 보너스 번호는 1부터 45사이의 숫자이어야 합니다.'
  }
  if(WINNING_LIST.includes(bonus_Number)){
    throw '[ERROR] 보너스 번호는 당첨 번호 이외의 숫자이어야 합니다.'
  }
}

module.exports = App;
