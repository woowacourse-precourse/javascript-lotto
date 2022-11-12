const MissionUtils = require("@woowacourse/mission-utils");
/// this.#numbers 가 뭐를 뜻하는지 어디에 써야하는지..??
// 리턴문이 필요할때와 아닐때의 차이
class Lotto {
  #numbers;

  constructor(splited) {
    this.validate(splited);
    this.#numbers = splited;
  }

  validate(splited) {
    // MissionUtils.Console.readLine("", (winNumbers) => {
    //   const splitedWinNumber = winNumbers.split(",").map(Number);
    //   for (let i = 0; i < 6; i++) {
    //     this.selectedWinNumber.push(splitedWinNumber[i]);
    //   }
    //   numbers = winNumbers
    //   MissionUtils.Console.print(""); // 공백
    //   this.selectBonusNumber();
    // });
    // numbers.split(",")
    // const splited = numbers.split(",").map(Number)

    console.log(splited)
    console.log(this.#numbers)
    if (splited.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const setNumbers = new Set(splited)
    if(splited.length !== setNumbers.size){
      throw new Error("[ERROR] 중복되지 않는 번호를 입력해 주세요");
    }
  }
}

// const lotto = new Lotto();
// lotto.buyLotto();

module.exports = Lotto;
