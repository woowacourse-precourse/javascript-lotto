const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class LottoGenerator {
  winningNumber;
  constructor() {}
  getWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (userInput) => {
      const lottoNumber = this.changeToNumbers(userInput);
      this.winningNumber = new Lotto(lottoNumber); // 로또 번호 생성기를 통해 로또 당첨 번호 생성
    });
  }
  changeToNumbers(numberString) {
    const numbers = numberString.split(",");
    return numbers;
  }
}

module.exports = LottoGenerator;
