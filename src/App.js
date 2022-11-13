const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const number_of_lottos = this.get_number_of_lottos();
    MissionUtils.Console.print(number_of_lottos + '개를 구매했습니다.');
    const lotto_list = this.generate_lottos(number_of_lottos);
    lotto_list.forEach((e) => {
      e.print_lotto();
    });
    const [win_number, bonus_number] = this.get_win_number_and_bonus_number();
    const matching_list = [];
    lotto_list.forEach((e) => {
      matching_list.push(e.matching_number(win_number, bonus_number));
    });
    const number_match_list = this.match(matching_list); //차례대로 3,4,5, 5+보너스, 6
    this.print_number_match_list(number_match_list);
    MissionUtils.Console.print(
      `총 수익률은 ${this.calculate_percentage(
        number_of_lottos,
        number_match_list
      )}%입니다.`
    );
  }

  get_number_of_lottos() {
    let user_price;
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (price) => {
      user_price = Number(price);
    });
    if (user_price % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원단위입니다.');
    }
    return user_price / 1000;
  }

  generate_lottos(number_of_lottos) {
    const list = [];
    for (let i = 0; i < number_of_lottos; i++) {
      list.push(
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
      );
    }
    return list;
  }

  get_win_number_and_bonus_number() {
    let win_number;
    let bonus_number;
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      win_number = numbers.split(',').map((e) => Number(e));
    });

    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (number) => {
      bonus_number = Number(number);
    });
    this.validate_win_bonus(win_number, bonus_number);

    return [win_number, bonus_number];
  }

  validate_win_bonus(win, bonus) {
    if (win.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
    const check_list = win.slice();
    check_list.push(bonus);
    if (check_list.length !== new Set(check_list).size) {
      throw new Error('[ERROR] 당첨 번호는 중복되면 안됩니다.');
    }
    check_list.forEach((e) => {
      if (e < 1 || e > 45) {
        throw new Error('[ERROR] 당첨 번호의 범위는 1~45까지입니다.');
      }
    });
  }
  match(list) {
    const three_match = this.three(list);
    const four_match = this.four(list);
    const five_match = this.five(list);
    const five_and_bonus_match = this.five_and_bonus(list);
    const six_match = this.six(list);
    return [
      three_match,
      four_match,
      five_match,
      five_and_bonus_match,
      six_match,
    ];
  }
  three(list) {
    let count = 0;
    list.forEach((e) => {
      if (e === 3) {
        count++;
      }
    });
    return count;
  }
  four(list) {
    let count = 0;
    list.forEach((e) => {
      if (e === 4) {
        count++;
      }
    });
    return count;
  }
  five(list) {
    let count = 0;
    list.forEach((e) => {
      if (e === 5) {
        count++;
      }
    });
    return count;
  }
  five_and_bonus(list) {
    let count = 0;
    list.forEach((e) => {
      if (e === 10) {
        count++;
      }
    });
    return count;
  }
  six(list) {
    let count = 0;
    list.forEach((e) => {
      if (e === 6) {
        count++;
      }
    });
    return count;
  }
  print_number_match_list(number_match) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${number_match[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${number_match[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${number_match[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number_match[3]}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${number_match[4]}개`
    );
  }

  calculate_percentage(number_lotto, number_match) {
    const price = number_lotto * 1000;
    let earn =
      number_match[0] * 5000 +
      number_match[1] * 50000 +
      number_match[2] * 1500000 +
      number_match[3] * 30000000 +
      number_match[4] * 2000000000;
    let earn_rate = earn / price;
    earn_rate = earn_rate * 100;
    return Math.round(earn_rate * 10) / 10;
  }
}

module.exports = App;
