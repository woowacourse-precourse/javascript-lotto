const { Console, Random } = require("@woowacourse/mission-utils");

class LottoGame {
  lineBreak() {
    Console.print(``);
  }

  getUserMoney() {
    Console.readLine("구매금액을 입력해 주세요", (money) => {
      this.checkUserMoney(money);

      this.showlottoNumOfBuying(money);
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
    return money % 1000;
  }

  showlottoNumOfBuying(money) {
    Console.print(`${this.lottoNumOfBuying(money)}개를 구매했습니다.`);

    this.lineBreak();
  }
}

module.exports = LottoGame;
