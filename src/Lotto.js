const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  checkWinNumber(winNumberArr) {}

  // validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
}
function changeLottoClass(winNumberArr) {
  let lotto = new Lotto(winNumberArr);
  lotto.checkWinNumber(winNumberArr);
}

// TODO: 추가 기능 구현
module.exports = new Lotto();
module.exports = { changeLottoClass };
