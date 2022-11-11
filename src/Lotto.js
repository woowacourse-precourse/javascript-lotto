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
  divideMoney(money){
    let quotient=Math.floor(money/1000)
    return quotient
  }
  showLottoArrays(computerNumberArray){
    computerNumberArray.forEach((e)=>{
      MissionUtils.Console.print(e)
    })
  }
  getUserLottoNumber(computerNumberArray){
    MissionUtils.Console.readLine('1~45사이의 서로 다른 숫자 6개를 입력해주세요.\n', (userLottoNumber) => {
      console.log(`닉네임: ${userLottoNumber}`);
    });
  }
  getUserBonusNumber(){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (money) => {
      console.log(`닉네임: ${money}`);
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
}

module.exports = Lotto;
