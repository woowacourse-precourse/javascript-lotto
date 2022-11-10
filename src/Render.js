class Render {
  showHowmanybought(lotto) {
    Console.print(`${this.lottoNumOfBuying(lotto)}개를 구매했습니다.`);
  }

  showMadeLotto(madeLotto) {
    let i = 0;

    for (; i < madeLotto.length; i++) {
      Console.print(madeLotto[i]);
    }
  }
}
module.exports = Render;
