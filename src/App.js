const LOTTO = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    const number_of_lottos = this.get_number_of_lottos();
    MissionUtils.Console.print(number_of_lottos + '개를 구매했습니다.');
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
}

module.exports = App;
