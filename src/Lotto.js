const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  // constructor(numbers) {
  //   this.validate(numbers);
  //   this.#numbers = numbers;
  // }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  // TODO: 추가 기능 구현
  setComputerRandomNumber(){
    const computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return computerNumbers
  }
  getUserInputMoney(){
    MissionUtils.Console.readLine('1000원단위로 돈을 입력해주세요', (money) => {
      this.createLottoNumArrays(money)
    });
  }
  divideMoney(money){
    let quotient=Math.floor(money/1000)
    return quotient
  }
  getUserLottoNumber(){
    MissionUtils.Console.readLine('1~45사이의 서로 다른 숫자 6개를 입력해주세요', (userLottoNumber) => {
      console.log(`닉네임: ${userLottoNumber}`);
    });
  }
  getUserBonusNumber(){
    MissionUtils.Console.readLine('1000원단위로 돈을 입력해주세요', (money) => {
      console.log(`닉네임: ${money}`);
    });
  }
  createLottoNumArrays(money){
    let amountOfMoney=this.divideMoney(money)
    for(let i=0;i<amountOfMoney;i++){
      this.setComputerRandomNumber()
    }
  }
}

module.exports = Lotto;
