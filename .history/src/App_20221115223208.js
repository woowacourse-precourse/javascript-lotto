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
    Console.readLine('���Աݾ��� �Է��� �ּ���.', (input) => {
      money = parseInt(input);
    });
    return ;
  }
}

module.exports = App;
