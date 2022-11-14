const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.purchase;
  }

  play() {
    let amount;
    let lotto_list;
    let winning_number;
    let bonus_number;

    this.purchase = this.input('구입금액을 입력해 주세요.\n');
    if (this.purchase === undefined)
      return 0;
    this.input_exception();

    amount = this.get_quantity();
    lotto_list = this.publish_lotto(amount);
    this.print_publish_result(amount, lotto_list);

    winning_number = this.input("당첨 번호를 입력해 주세요.");
    winning_number = this.input_arrangement(winning_number);
    bonus_number = this.input("보너스 번호를 입력해 주세요.");
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

  publish_lotto(amount) {
    let lotto_list = [];
    for (let i=0; i<amount; i++) {
      lotto_list.push(this.random_lotto_number());
    }
    return lotto_list;
  }

  print_publish_result(amount, lotto_list) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.\n`);
    this.lotto_print_formating(lotto_list);
  }

  lotto_print_formating(lotto_list) {
    lotto_list.forEach( (element) => {
      let str = `[`;
      element.forEach((val) => {
        str += val;
        str += `, `;
      });
      str = str.slice(0,str.length-2);
      str += `]`;
      MissionUtils.Console.print(str);
    })
  }

  input_arrangement(winning_number) {
    let result = winning_number.split(",").map(function(value) {
      return parseInt(value, 10);
    })
    return result;
  }
}

const app = new App();
app.play();

module.exports = App;
