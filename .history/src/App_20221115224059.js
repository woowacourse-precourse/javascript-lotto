const MissionUtils = require("@woowacourse/mission-utils");
import Lotto from './Lotto';
class App {
  play() {
    let cntLotto = InputMoney();
    MissionUtils.Console.print(cntLotto +'���� �����߽��ϴ�.');
    let Lotto_list = makeLottos(cntLotto);
    printLotto(Lotto_list);
    let WinningNumber = InputWinningNumber();
    let BonusNumber = InputBonusNumber();
    checkWinning(Lotto_list, WinningNumber, BonusNumber);
  }

  Input(){
    let money;
    MissionUtils.Console.readLine('���Աݾ��� �Է��� �ּ���.', (input) => {
      money = parseInt(input);
    });
    if(money < 1000 || money % 1000 !== 0)
      throw new error("�߸��� �Է��Դϴ�.");
    return ;
  }
}

module.exports = App;
