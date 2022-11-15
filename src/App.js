const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.purchase;
  }

  play() {
    let input_amount
    let amount;
    let lotto_list;
    let winning_number;
    let bonus_number;
    let result;
    let yield_amount;

    input_amount = this.input('구입금액을 입력해 주세요.\n');
    if (input_amount === undefined)
      return 0;
    this.input_exception(input_amount);

    amount = this.get_quantity();
    lotto_list = this.publish_lotto(amount);
    this.print_publish_result(amount, lotto_list);

    winning_number = this.input("당첨 번호를 입력해 주세요.");
    winning_number = this.input_arrangement(winning_number);
    bonus_number = this.input("보너스 번호를 입력해 주세요.");
    const lotto = new Lotto(winning_number);

    result = lotto.compare_result(bonus_number, lotto_list);
    yield_amount = this.calc_yield(result);
    this.final_lotto_result(result, yield_amount);
  }

  input(text) {
    let result;
    MissionUtils.Console.readLine(text, (answer) => {
      result = answer;
    });
    return result;
  }

  input_exception(numbers) {
    let regex = /^[0-9]+$/;
  
    if (!regex.test(numbers)) {
      MissionUtils.Console.close();
      throw new Error("[ERROR] 숫자여야 합니다.");
    }
    this.purchase = numbers;
    return true;
  }

  get_quantity() {
    if (this.get_quantity_exception(Number(this.purchase))) {
      return Number(this.purchase) / 1000;
    }
  }

  get_quantity_exception(amount) {
    if (amount === NaN) {
      throw new Error("[ERROR] 숫자가 아닙니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위가 아닙니다.");
    }
    return true;
  }

  publish_lotto(amount) {
    let lotto_list = [];
    for (let i=0; i<amount; i++) {
      lotto_list.push(this.random_lotto_number());
    }
    return lotto_list;
  }

  random_lotto_number() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
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
      if (isNaN(parseInt(value, 10))) {
        throw new Error("[ERROR] 당첨 번호 입력이 잘못되었습니다.");
      }
      return parseInt(value, 10);
    })
    return result;
  }

  calc_yield(result) {
    let yield_amount = result[0]*5000 + result[1]*50000 + result[2]*1500000 + result[3]*30000000 + result[4]*2000000000;
    yield_amount = yield_amount / this.purchase * 100;
    yield_amount.toFixed(1);
    return yield_amount;
  }

  final_lotto_result(result, yield_amount) {
    MissionUtils.Console.print(`당첨 통계`);
    MissionUtils.Console.print(`---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[4]}개`);
    MissionUtils.Console.print(`총 수익률은 ${yield_amount}%입니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
