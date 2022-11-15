const MissionUtils = require("@woowacourse/mission-utils");
import Lotto from './Lotto';
class App {
  play() {
    Input();
    Rotto();
    print();
  }

  Input(){
    let money;
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      this.money = money;
    });
    return ;
  }
}

module.exports = App;
