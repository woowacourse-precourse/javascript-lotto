const { Console } = require('@woowacourse/mission-utils');
const Lotto = require("./Lotto.js");
const Customer = require("./Customer.js");

class App {
  constructor() {
    this.Customer = new Customer();
    this.Lottos = [];
  }

  play() {
    this.getTotalMoneyInput();
  }

  getTotalMoneyInput() {
    Console.readLine("구입금액을 입력해 주세요.\n", (totalMoney) => {
      this.isValidMoney(totalMoney);
      this.lottoAmount = totalMoney/1000;
      this.creatLottos();
      this.displayAllLottos();

      this.getWinningNum();
    })
  } 
  
  displayAllLottos() {
    Console.print("\n"+this.lottoAmount+"개를 구매했습니다.")
    this.Lottos.forEach((lotto) => {
      Console.print(lotto.getLottoNums());
    })
  }

  getWinningNum() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winningNumString) => {
      this.winningNum = new Lotto(this.stringToArray(winningNumString));
    })
  }

  stringToArray(numString) {
    return numString.split(',').map(Number);
  }

  isValidMoney(money) {
    if(isNaN(money) || !Number.isInteger(Number(money))) {
      throw new Error("[ERROR] 구입 금액은 정수형 입니다.");
    }
    if(money % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위 입니다.");
    }
  }

  creatLottos() {
    for(let i=0; i<this.lottoAmount; i++) {
      this.Lottos.push(this.Customer.buyLotto());
    }
  }
}

module.exports = App;
