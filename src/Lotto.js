const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    // if (numbers.length !== 6) {
    //   throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    // }
  }

  // TODO: 추가 기능 구현
  setComputerRandomNumber(){
    const computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return computerNumbers
  }
  getUserInputMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해주세요.\n', (money) => {
      this.createLottoNumArrays(money)
    });
  }
  getUserLottoNumber(computerNumberArray){
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (userLottoNumber) => {
      this.getUserBonusNumber(computerNumberArray,userLottoNumber)
    });
  }
  getUserBonusNumber(computerNumberArray,userLottoNumber){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusMoney) => {
      this.calculatePrizeLottery(computerNumberArray,userLottoNumber,Number(bonusMoney))
    });
  }
  createLottoNumArrays(money){
    let amountOfMoney=this.divideMoney(money)
    let computerNumberArray=[]
    for(let i=0;i<amountOfMoney;i++){
      computerNumberArray.push(this.setComputerRandomNumber())
    }
    this.showLottoArrays(computerNumberArray)
  }
  divideMoney(money){
    // 테스트 케이스 작성
    // 1000보다 작을경우, 나누어떨어지지 않을경우, 숫자 앞자리가 0일경우, 문자가 있을경우,음수일경우
    let quotient=money/1000
    return quotient
  }
  showLottoArrays(computerNumberArray){
    computerNumberArray.forEach((e)=>{
      MissionUtils.Console.print(e)
    })
    this.getUserLottoNumber(computerNumberArray)
  }
  calculatePrizeLottery(computerNumberArray,userLottoNumber,bonusMoney){
    let userLottoArray=userLottoNumber.split(',').map((e)=>Number(e))
    computerNumberArray.forEach((eachNumberArray)=>this.checkLottery(eachNumberArray,userLottoArray,bonusMoney))
  }
  checkLottery(eachNumberArray,userLottoArray,bonusMoney){
    let count=0
    eachNumberArray.forEach((comNumber)=>{
      if(userLottoArray.includes(comNumber)){
        count++
      }
    })
    console.log(count);
    if(count===5) this.checkLotteryHelper(eachNumberArray,bonusMoney)
    return count
  }
  checkLotteryHelper(eachNumberArray,bonusMoney){
    console.log(eachNumberArray,bonusMoney);
    if(eachNumberArray.includes(bonusMoney)){
      console.log(`5등 당점`);

    }
  }
  showPrizeLottery(){
    MissionUtils.Console.print(`3개 일치 (5000원) - $개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - $개`)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - $개`)
    MissionUtils.Console.print(`5개 일치 (3,000,000원) - $개`)
    MissionUtils.Console.print(`3개 일치 (2,000,000,000원) - $개`)
  }
}

module.exports = Lotto;
