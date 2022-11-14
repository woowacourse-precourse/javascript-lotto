const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.purchase;
  }

  play() {
    let amount;
    
    this.purchase = this.input('구입금액을 입력해 주세요.\n');
    if (this.purchase === undefined)
      return 0;
    this.input_exception();

    amount = this.get_quantity();
  }

  input(text) {
    let result;
    MissionUtils.Console.readLine(text, (answer) => {
      result = answer;
    });
    return result;
  }

  input_exception() {
    let regex = /^[0-9]+$/;

    if (this.purchase === undefined || this.purchase === null) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 입력된 구입금액이 없습니다.");
    }
    if (!regex.test(this.purchase)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  get_quantity() {
    let amount = Number(this.purchase);
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위가 아닙니다.");
    }
    let result = amount / 1000;
    return result;
  }
}

const app = new App();
app.play();

module.exports = App;
