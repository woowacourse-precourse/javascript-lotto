const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const NUMBER_OF_LOTTOS = this.get_number_of_lottos();
    MissionUtils.Console.print(NUMBER_OF_LOTTOS + '개를 구매했습니다.');
    const LOTTO_LIST = this.generate_lottos(NUMBER_OF_LOTTOS);
    LOTTO_LIST.forEach((e) => {
      e.print_lotto();
    });
    const [WIN_NUMBER, BONUS_NUMBER] = this.get_win_number_and_bonus_number();
    const MATCHING_LIST = [];
    LOTTO_LIST.forEach((e) => {
      MATCHING_LIST.push(e.matching_number(WIN_NUMBER, BONUS_NUMBER));
    });
    const NUMBER_MATCH_LIST = this.match(MATCHING_LIST); //차례대로 3,4,5, 5+보너스, 6
    this.print_number_match_list(NUMBER_MATCH_LIST);
    MissionUtils.Console.print(`총 수익률은 ${this.calculate_percentage(NUMBER_OF_LOTTOS,NUMBER_MATCH_LIST)}%입니다.`);
    MissionUtils.Console.close();
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
    const LIST = [];
    for (let i = 0; i < number_of_lottos; i++) {
      LIST.push(
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
      );
    }
    return LIST;
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
    const THREE_MATCH = this.three(list);
    const FOUR_MATCH = this.four(list);
    const FIVE_MATCH = this.five(list);
    const FIVE_AND_BONUS_MATCH = this.five_and_bonus(list);
    const SIX_MATCH= this.six(list);
    return [
      THREE_MATCH,
      FOUR_MATCH,
      FIVE_MATCH,
      FIVE_AND_BONUS_MATCH,
      SIX_MATCH,
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
    const PRICE = number_lotto * 1000;
    let earn =
      number_match[0] * 5000 +
      number_match[1] * 50000 +
      number_match[2] * 1500000 +
      number_match[3] * 30000000 +
      number_match[4] * 2000000000;
    let earn_rate = earn / PRICE;
    earn_rate = earn_rate * 100;
    return Math.round(earn_rate * 10) / 10;
  }
}

module.exports = App;
