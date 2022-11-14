const MissionUtils = require("@woowacourse/mission-utils");
// const Lotto = require("./Lotto");
class lottoProcess {
  moneyInput() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      money = Number(money);
      if (money % 1000 !== 0) {
        throw new Error(
          "[ERROR] 금액이 1,000원 단위로 나누어 떨이지지 않습니다."
        );
      }
      this.money = money / 1000;
    });
  }
  randomLottoNumber() {
    for (let index = 0; index < this.money; index++) {
      this.lottoArray.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
    }
  }
  randomLottoPrint() {
    for (let index = 0; index < this.money; index++) {
      MissionUtils.Console.print(
        `[${String(
          this.lottoArray[index].sort((first, second) => {
            return first - second;
          })
        )
          .split(",")
          .join(", ")}]`
      );
    }
  }
  buy() {
    this.randomLottoNumber();
    this.randomLottoPrint();
    MissionUtils.Console.print(`${this.money}개를 구매했습니다.`);
  }
}

module.exports = lottoProcess;
