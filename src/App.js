const MissionUtils = require("@woowacourse/mission-utils");
const {Console} = MissionUtils;
const Lotto = require("./Lotto.js");
const LottoTicket = require("./LottoTicket.js");


class App {
  lottoticket;
  input_money;
  input_lotto;
  input_bonus;

  play() {
    this.inputMoney();
    Console.print("test");
    // let lotto = new LottoTicket();
    // Console.print(lotto.getNumbers());
  }

  inputMoney(){
    Console.readLine('구입금액을 입력해 주세요.\n', (input_money) => {
      this.input_money = input_money;
    });
  }

  
}

const app = new App();
app.play();

module.exports = App;
