const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constant.js");

class Lotto {
  #numbers;
  
  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
    this.mylotto = [];
  }
  
  askLottoCost(){
    Console.readLine(`${MESSAGE.START}\n`,(cost) => {
      this.cost = Number(cost);
      this.lottoCount = parseInt(this.cost / 1000);
      this.makeLottoNumber(this.lottoCount);
    })
  }



  makeLottoNumber(lottoCount){
    for(let i = 0; i<lottoCount; i++){
      let lotto = Random.pickUniqueNumbersInRange(1,45,6);
      this.mylotto.push(lotto);
    }
    console.log(this.mylotto)
  }

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
}

module.exports = Lotto;
