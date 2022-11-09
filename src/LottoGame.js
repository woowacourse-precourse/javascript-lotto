const { Console, Random } = require("@woowacourse/mission-utils");

class LottoGame {
  lineBreak() {
    Console.print(``);
  }

  getUserMoney() {
    Console.readLine("구매금액을 입력해 주세요", (money) => {
      this.checkUserMoney(money);

      this.showlottoNumOfBuying(money);

      this.showLotto(money);
    });
  }

  checkUserMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error(`[ERROR] 돈은 1000원 단위로 입력이 가능합니다.`);
    }
    if (money <= 0) {
      throw new Error(`[ERROR] 돈은 1000원부터 입력이 가능합니다.`);
    }
  }

  lottoNumOfBuying(money) {
    return money / 1000;
  }

  showlottoNumOfBuying(money) {
    Console.print(`${this.lottoNumOfBuying(money)}개를 구매했습니다.`);

    this.lineBreak();
  }

  makeLotto(money) {
    const buyingNum = this.lottoNumOfBuying(money);
    let lottoNum = [];
    let i = 0;

    for (; i < buyingNum; i++) {
      let randomNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNum.push(randomNum.sort((a, b) => a - b));
    }
    return lottoNum;
  }

  showLotto(money) {
    const lottoNum = this.makeLotto(money);

    let i = 0;

    for (; i < lottoNum.length; i++) {
      Console.print(lottoNum[i]);
    }

    this.lineBreak();
  }

  getwinningNum() {
    Console.readLine("당첨 번호를 입력해 주세요.", (winningNum) => {});
  }
}

module.exports = LottoGame;
