const { print } = require("./Missionutils");
class view {
  #winngingResult;

  printRankingResult(winngingResult) {
    this.#winngingResult = winngingResult;
    print(`3개 일치 (5,000원) - ${this.#winngingResult[5]}개`);
    print(`4개 일치 (50,000원) - ${this.#winngingResult[4]}개`);
    print(`5개 일치 (1,500,000원) - ${this.#winngingResult[3]}개`);
    print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#winngingResult[2]}개`);
    print(`6개 일치 (2,000,000,000원) - ${this.#winngingResult[1]}개`);
  }

  printEariningRate(percentage) {
    print(`총 수익률은 ${percentage}%입니다.`);
  }
}
module.exports = view;
