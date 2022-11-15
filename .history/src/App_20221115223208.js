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
    Console.readLine('구입금액을 입력해 주세요.', (input) => {
      money = parseInt(input);
    });
    return ;
  }
}

module.exports = App;
