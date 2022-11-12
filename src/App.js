const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { Lotto, createLotto } = require("./Lotto");

class App {
  myPayment;
  allLottos = [];

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.buyLotto(money);
    });
  }

  // 로또 구입 금액만큼 새로운 로또번호를 발급하는 기능
  buyLotto(money) {
    this.checkErrorBuyingLotto(money);

    this.myPayment = money;
    let quantity = money / 1_000;

    Console.print(`\n${quantity}개를 구매했습니다.`);

    while (quantity > 0) {
      const lotto = createLotto().getNumbers();
      this.allLottos.push(lotto);
      Console.print(lotto);
      quantity--;
    }
  }

  // 사용자가 올바른 금액을 입력했는지 확인하는 기능
  checkErrorBuyingLotto(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }

    if (money % 1_000) {
      throw new Error("[ERROR] 로또는 1,000원 단위로 구매 가능합니다.");
    }
  }
}

module.exports = App;
