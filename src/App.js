const { Console } = require('@woowacourse/mission-utils');
const GetLotto = require('./GetLotto');

class App {
  constructor() {

  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      GetLotto(money);
    })
  }

  getWinNumber() {
    Console.readLine()
  }

}

module.exports = App;
