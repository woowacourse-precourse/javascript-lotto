// const MissionUtils = require("@woowacourse/mission-utils");
/// this.#numbers 가 뭐를 뜻하는지 어디에 써야하는지..??
// 리턴문이 필요할때와 아닐때의 차이
class Lotto {
  #numbers;

  constructor(splitedWinNumber) {
    this.validate(splitedWinNumber);
    this.#numbers = splitedWinNumber;
  }

  validate(splitedWinNumber) {
    if (splitedWinNumber.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const setNumbers = new Set(splitedWinNumber)
    if(splitedWinNumber.length !== setNumbers.size){
      throw new Error("[ERROR] 중복되지 않는 번호를 입력해 주세요.");
    }
    const regExp = new RegExp("^[0-9]+$");
    if(splitedWinNumber.filter((element) =>!regExp.test(element)).length !== 0){
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }
    if(splitedWinNumber.filter((element) => element < 1 || element > 45).length !== 0){
      throw new Error("[ERROR] 1부터 45까지의 숫자만 입력해 주세요.");
    }

  }
}


module.exports = Lotto;
