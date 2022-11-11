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
      this.calculatePrizeLottery(computerNumberArray,userLottoNumber,bonusMoney)
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
  calculatePrizeLottery(){

  }
  showPrizeLottery(){

  }
}

module.exports = Lotto;
