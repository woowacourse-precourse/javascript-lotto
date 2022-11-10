const { Random, Console } = require('@woowacourse/mission-utils');

class Winning {
  numbertoArray(winNumber) {
    this.winningNumberArray = winNumber.split(',').map((number) => {
      return parseInt(number, 10);
    });
  }

  numberException() {
    if (this.winningNumberArray.length !== 6)
      throw new Error("[ERROR] ' , '로 구분된 숫자 6개를 입력해주세요.");
    console.log(this.winningNumberArray);
  }
}
module.exports = Winning;
