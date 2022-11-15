const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const WinningNumber = require("./WinningNumber");

class App {
  constructor() {
    this.lottoArr = [];
    this.amount = 0;
  }

  play() {
    this.printStart();
    this.orderAmount();
  }

  /** 1. 게임시작 안내 문구 출력*/
  printStart() {
    Console.print('구입금액을 입력해 주세요.');
  }

  /** 2. 구입금액 입력 및 금액대비 생성할 로또 수 계산 */
  orderAmount() {
    Console.readLine('', (amount) => {
      this.amount = amount;
      if(isNaN(amount) || amount % 1000 !== 0) {
        throw new Error('[ERROR]구매 금액이 잘못되어, 게임을 종료합니다.');
      } 
      var lottoCount = amount / 1000
      this.creatLottos(lottoCount);
    });
  }

  /** 3. 1~45까지 겹치지 않는 랜덤 숫자 생성 */
  creatLottos(lottoCount) {
    for(var i = 0; i < lottoCount; i++) {
      var randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      var lotto = new Lotto(randomNumbers);
      this.lottoArr.push(lotto);
    }
    this.creatLottosOutput(lottoCount);
  }

  /** 4. 구입금액 대비 구매한 결과 출력 */
  creatLottosOutput(lottoCount){
    Console.print(`${lottoCount} 개를 구매했습니다.`);
    this.lottoArr.forEach(lotto => lotto.print());
    this.inputWinningNumber();
  }

  /** 5. 당첨번호 입력 안내 및 입력 구현 
  */
  inputWinningNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (winning) => {
      var winningArr = Array.from(winning.split(','),Number);
      var winningNumber = new WinningNumber(winningArr);
    });
  }

 
}

const app = new App();
app.play();

module.exports = App;
