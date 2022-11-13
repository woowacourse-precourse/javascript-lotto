const MissionUtils = require("@woowacourse/mission-utils");
const {Console} = MissionUtils;
const Lotto = require("./Lotto.js");
const LottoTicket = require("./LottoTicket.js");


class App {
  lottoticket;
  input_money;
  input_lotto;
  input_bonus;

  play(){
    this.inputMoney();
  }

  inputMoney(){
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      // this.notNumberCheck(input);
      this.input_money = input;
    });
  }

  inputWinNumber(){
    Console.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
      input = input.split(",");
      const input_lotto = new Lotto(input);
      this.input_lotto = input_lotto;
    });  
  }

  inputBonusNumber(){
    Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      // notNumberCheck();
      this.input_bonus = input;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
