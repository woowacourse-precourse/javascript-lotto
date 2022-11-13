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
  }

  inputMoney(){
    Console.readLine('구입금액을 입력해 주세요.\n', (input_money) => {
      if(isNaN(input_money))
        throw new Error("[Error] 숫자를 입력해주세요.");
      this.input_money = input_money;
    });
  
  
  }
}

const app = new App();
app.play();

module.exports = App;
