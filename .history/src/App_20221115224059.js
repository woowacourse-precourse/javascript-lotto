const MissionUtils = require("@woowacourse/mission-utils");
import Lotto from './Lotto';
class App {
  play() {
    let cntLotto = InputMoney();
    MissionUtils.Console.print(cntLotto +'개를 구매했습니다.');
    let Lotto_list = makeLottos(cntLotto);
    printLotto(Lotto_list);
    let WinningNumber = InputWinningNumber();
    let BonusNumber = InputBonusNumber();
    checkWinning(Lotto_list, WinningNumber, BonusNumber);
  }

  Input(){
    let money;
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      money = parseInt(input);
    });
    if(money < 1000 || money % 1000 !== 0)
      throw new error("잘못된 입력입니다.");
    return ;
  }
}

module.exports = App;
