const{ Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const LOTTO_PRICE = 1000;
const START_LOTTO_NUMBER = 1;
const END_LOTTO_NUMBER = 45;
const LOTTO_LENGTH = 6;

class App {

  constructor() {
    this.purchaseAmount = 0;
    this.lottoAmount = 0;
    this.lottoList = {};
    this.luckyNumbers = 0;
  }

  play() {
  return Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      this.validatePrice(answer);
      this.purchaseAmount = answer;
      this.countBuyLotto();
    })
  }

  validatePrice(answer) {
    if(answer % LOTTO_PRICE !== 0) throw new Error(`[ERROR] ${LOTTO_PRICE}원으로 나누어 떨어져야 합니다.`);
  }

  countBuyLotto() {
    this.lottoAmount = this.purchaseAmount / LOTTO_PRICE;
    Console.print(`${this.lottoAmount}개를 구매했습니다.`);
    this.getLottoNumberes();
    this.printOutBuyLotto();
  }

  getLottoNumberes() {
    let lottoList = [];
    for(let idex = 0; idex < this.lottoAmount; idex++){
      let makeLotto = Random.pickUniqueNumbersInRange(START_LOTTO_NUMBER, END_LOTTO_NUMBER, LOTTO_LENGTH);
      lottoList.push(makeLotto.sort((elementOne, elementTwo) => elementOne - elementTwo));
    }
    return this.lottoList = lottoList;
  }

  printOutBuyLotto() {
    for(let idex = 0; idex < this.lottoAmount; idex++){
      Console.print(`[${this.lottoList[idex].join(", ")}]`);
    }
    this.getLuckyNumbers();
  }

  getLuckyNumbers() {
    Console.readLine('당첨번호를 입력해 주세요.\n', (answer)=>{
      this.validateLuckyNumbers(answer);
      this.luckyNumbers = answer;
    })
  }

  validateLuckyNumbers(answer) {
    let checkAnswer = answer.split(',');
    let lotto = new Lotto(checkAnswer);
    lotto.validate(checkAnswer);
  }
}
let app = new App();
app.play();
module.exports = App;
