const MissionUtils = require("@woowacourse/mission-utils");
import Lotto from './Lotto';
class App {
  play() {
    let cntLotto = InputMoney();
    let Lotto_list = makeLottos(cntLotto);
    printLotto(Lotto_list);
    let WinningNumber = InputWinningNumber();
    let BonusNumber = InputBonusNumber();
    let benefit = checkWinning(Lotto_list, WinningNumber, BonusNumber);
    printRevenue(cntLotto, benefit);
  }

  InputMoney(){
    let money;
    let cntLotto;

    MissionUtils.Console.readLine('���Աݾ��� �Է��� �ּ���.', (input) => {
      money = parseInt(input);
    });
    if(money < 1000 || money % 1000 !== 0)
      throw new error("�߸��� �Է��Դϴ�.");
    cntLotto = money/1000;
    MissionUtils.Console.print(cntLotto +'���� �����߽��ϴ�.');
    return cntLotto;
  }
}

module.exports = App;
