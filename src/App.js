const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { Lotto, createLotto } = require("./Lotto");

class App {
  myPayment;
  myLottoNumber;
  allLottos = [];

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.buyLotto(money);
      this.inputMyNumber();
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

  // 사용자가 당첨 번호를 입력하는 기능
  inputMyNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (myLottoNumber) => {
      myLottoNumber = this.convertToArr(myLottoNumber);
      this.myLottoNumber = new Lotto(myLottoNumber).getNumbers();
      Console.print(this.myLottoNumber);
    });
  }

  convertToArr(str) {
    let arr = [];
    let left = 0;

    for (let i = 1; i < str.length; i++) {
      if (str[i] === ",") {
        arr.push(Number(str.slice(left, i)));
        left = i + 1;
      }
    }

    arr.push(Number(str.slice(left)));

    return arr;
  }
}

const app = new App();
app.play();

module.exports = App;
