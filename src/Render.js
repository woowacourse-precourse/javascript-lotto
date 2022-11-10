const { Console, Random } = require("@woowacourse/mission-utils");
class Render {
  showHowmanybought(lotto) {
    Console.print(`${lotto}개를 구매했습니다.`);
  }

  showMadeLotto(madeLotto) {
    let i = 0;

    for (; i < madeLotto.length; i++) {
      Console.print(madeLotto[i]);
    }
  }
}
module.exports = Render;
