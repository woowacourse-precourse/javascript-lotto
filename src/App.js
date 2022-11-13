const{ Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const LOTTO_PRICE = 1000;

class App {

  constructor() {
    this.purchaseAmount = 0;
    this.lottoAmount = 0;
    this.lottoList = {};
  }

  play() {
  return Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      this.validate(answer);
      this.purchaseAmount = answer;
      this.countBuyLotto();
    })
  }

  validate(answer) {
    if(answer % LOTTO_PRICE !== 0) throw new Error(`[ERROR] ${LOTTO_PRICE}원으로 나누어 떨어져야 합니다.`);
  }

  countBuyLotto() {
    this.lottoAmount = this.purchaseAmount / LOTTO_PRICE;
    Console.print(`${this.lottoAmount}개를 구매했습니다.`);
    this.printOutBuyLotto();
  }

  printOutBuyLotto() {
    this.lottoList  = Lotto.getLottoNumberes(this.lottoAmount);
    for(let idex = 0; idex < this.lottoAmount; idex++){
      Console.print(`[${this.lottoList[idex].join(", ")}]`);
    }
  }
}
let app = new App();
app.play();
module.exports = App;
