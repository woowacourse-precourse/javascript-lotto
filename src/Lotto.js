const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  buyLotto(){
    MissionUtils.Console.print('구입금액을 입력해 주세요.');
  }
  pay(){
    MissionUtils.Console.readLine('', (pay) => {
      MissionUtils.Console.print(pay);
      return pay
    });
  }
  


  // validate(numbers) {
    
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  
}

// const lotto = new Lotto();
// lotto.play();

module.exports = Lotto;
