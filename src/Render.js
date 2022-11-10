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
  lineBreak() {
    Console.print(``);
  }

  renderResult(result) {
    this.lineBreak();
    Console.print(`---`);
    this.lineBreak();
    let benefit = 0;
    for (let i = 0; i < 5; i++) {
      switch (this.result[i][0]) {
        case "5등":
          benefit = benefit + 5000 * this.result[i][1];
          Console.print(`3개 일치 (5,000원) - ${this.result[i][1]}개`);
          break;
        case "4등":
          benefit = benefit + 50000 * this.result[i][1];
          Console.print(`4개 일치 (50,000원) - ${this.result[i][1]}개`);
          break;
        case "3등":
          benefit = benefit + 1500000 * this.result[i][1];
          Console.print(`5개 일치 (1,500,000원) - ${this.result[i][1]}개`);
          break;
        case "2등":
          benefit = benefit + 30000000 * this.result[i][1];
          Console.print(`5개 일치 (30,000,000원) - ${this.result[i][1]}개`);
          break;
        case "1등":
          benefit = benefit + 200000000 * this.result[i][1];
          Console.print(`6개 일치 (2,000,000,000원) - ${this.result[i][1]}개`);
          break;
      }
    }
  }
}
module.exports = Render;
