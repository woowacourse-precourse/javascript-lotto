const LOTTO = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const number_of_lottos = this.get_number_of_lottos();
    MissionUtils.Console.print(number_of_lottos + '개를 구매했습니다.');
    const [win_number, bonus_number] = this.get_win_number_and_bonus_number();
  }

  get_number_of_lottos() {
    let user_price;
    MissionUtils.Console.readLine('구입 금액을 입력하세요.', (price) => {
      user_price = Number(price);
    });
    if (user_price % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원단위입니다.');
    }
    return user_price / 1000;
  }
  get_win_number_and_bonus_number() {
    let win_number;
    let bonus_number;
    MissionUtils.Console.readLine('당첨 번호를 입력하세요', (numbers) => {
      win_number = numbers.split(',').map((e) => Number(e));
    });

    MissionUtils.Console.readLine('보너스 번호를 입력하세요', (number) => {
      bonus_number = Number(number);
    });
    this.validate_win_bonus(win_number, bonus_number);
    return [win_number, bonus_number];
  }

  validate_win_bonus(win, bonus) {
    if (win.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
    const check_list = win.push(bonus);
    if (check_list.length !== new Set(check_list).size) {
      throw new Error('[ERROR] 당첨 번호는 중복되면 안됩니다.');
    }
    check_list.forEach((e) => {
      if (e < 1 || e > 45) {
        throw new Error('[ERROR] 당첨 번호의 범위는 1~45까지입니다.');
      }
    });
  }
}

module.exports = App;
