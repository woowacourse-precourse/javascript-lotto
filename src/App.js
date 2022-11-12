const Lotto = require('./Lotto.js')
const Buyer = require('./Buyer.js')
const {Console, Random} = require("@woowacourse/mission-utils");

const ASK_LOTTO_PRICE = "구입금액을 입력해 주세요.";
const ASK_WINNING_LOTTO_NUMBER = "당첨 번호를 입력해 주세요.";
const ASK_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";

class App {
  lottoCount;
  winningLottoNumber;
  BonusLottoNumber;

  buyLotto(price){
    const buyer = new Buyer(price);
    this.lottoCount = buyer.lottoCount;
  }

  printLottoCount(lottoCount){
    Console.print(`\n${lottoCount}개를 구매했습니다`)
  }

  issuedLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  sortLottoNumberInAscendignOrder(lottoNumber){
    return lottoNumber.sort((a, b) => a - b);
  }

  printLottoNumber(lottoNumber) {
    return Console.print(`[${lottoNumber.join(', ')}]`)
  }

  printIssuendLotto(lottoCount){
    for(let i =0;i<lottoCount;i++){
      let lottoNumber = this.sortLottoNumberInAscendignOrder(this.issuedLottoNumber())
      this.printLottoNumber(lottoNumber)
    }
  }

  getWinningLottoNumber(){
    Console.print(ASK_WINNING_LOTTO_NUMBER);
    Console.readline(
      "",
      (number) => (this.winningLottoNumber = number.split(",").map(Number))
    );
  }

  play() {
    Console.print(ASK_LOTTO_PRICE);
    // Console.readLine('',price => this.buyLotto(price))
  }
}

// const app = new App();
// app.play();

module.exports = App;