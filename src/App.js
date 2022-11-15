const MissionUtils = require("@woowacourse/mission-utils");


class App {
  play() {
    purchaseInput()

  }
}
function purchaseInput() {
  MissionUtils.Console.readLine('금액을 입력해 주세요', (purchase_input)=>{
    exceptiondollar(purchase_input)
    
    lotto(purchase_input)
  })
}

function lotto(dollarInput) {
  MissionUtils.Console.print(`${dollarInput/1000}개를 구매했습니다.`)
  let lotto_number = []
  for (let i = 0; i < dollarInput/1000; i++){
    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=> {
      if(a>b){return 1}
      if(a<b){return -1}
    })
    MissionUtils.Console.print(`[${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}, ${numbers[5]}]`)
    lotto_number.push(numbers)
  }
  
  return winningInput(lotto_number)
}

function winningInput (lotto_number) {
  MissionUtils.Console.readLine('당첨 번호를 입력해 주세요', (winning_inputnumber)=>{
    exceptionWinningInput(winning_inputnumber)
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요', (bonus_inputnumber)=>{
      return winningNumber(lotto_number, winning_inputnumber, bonus_inputnumber)
    })
  })
}

function winningNumber (lotto_number, winning_inputnumber, bonus_inputnumber) {
  let winningPoint = [0, 0, 0, 0, 0]
  lotto_number.forEach((item)=>{
    let count = 0
    item.forEach((idx)=>{
      if(winning_inputnumber.includes(idx)){count ++}
    })
    countcheck(count, bonus_inputnumber, winningPoint, lotto_number)
  })
  return winningresult(lotto_number, winningPoint)
}
function countcheck(count, bonus_inputnumber, winningPoint, lotto_number){
  if(count==5 && lotto_number.includes(bonus_inputnumber)){
    console.log('----')
    count = 100
  }
  switch (count) {
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
    case 100:
      winningPoint[3]++
  }
}
function winningresult(lotto_number, winningPoint) {
  let value = 5000*winningPoint[0] + 50000*winningPoint[1] + 1500000*winningPoint[2] + 30000000*winningPoint[3] + 2000000000*winningPoint[4]
  let dummy = lotto_number.length*1000
  MissionUtils.Console.print(`당첨 통계`)
  MissionUtils.Console.print('---')
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningPoint[0]}개`)
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningPoint[1]}개`)
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningPoint[2]}개`)
  MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningPoint[3]}개`)
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningPoint[4]}개`)
  MissionUtils.Console.print(`총 수익률은 ${value*100/dummy}%입니다.`)
  MissionUtils.Console.close()
}
// function resultprint (lotto_number, winningPoint) {
//   MissionUtils.Console.print(`${lotto_number.length}개를 구매했습니다.`)
//   lotto_number.forEach((item)=>{
//     MissionUtils.Console.print(`"${item}"`)
//   })
//   winningresult(lotto_number, winningPoint)
// }
function exceptiondollar(dollarInput) {
  let regExp = new RegExp('/\D/gm')
  if (regExp.test(dollarInput)){
    throw '[ERROR] 숫자만 입력해 주세요'
  }
  if (dollarInput%1000 > 0){
    throw '[ERROR] 금액은 1,000원 단위로 입력해야 합니다.'
  }
}
function exceptionWinningInput(winningInput){
  let winningInputArray = winningInput.split(',')
  let regExp = new RegExp('/\D/gm')
  let winningSet = new Set(winningInputArray)
  if (regExp.test(winningInput)){
    throw '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
  }
  if (Math.max(winningInput)>45){
    throw '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'
  }
  if (winningInputArray.length !== 6) {
    throw '[ERROR] 로또 번호는 6개여야 합니다.'
  }
  if (winningSet.size !== 6) {
    throw '[ERROR] 로또 번호는 서로 다른 6개여야 합니다.'
  }
}

module.exports = App;
