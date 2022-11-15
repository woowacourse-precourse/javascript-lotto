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

    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      money = parseInt(input);
    });
    if(money < 1000 || money % 1000 !== 0)
      throw new error("잘못된 입력입니다.");
    cntLotto = money/1000;
    MissionUtils.Console.print(cntLotto +'개를 구매했습니다.');
    return cntLotto;
  }
}

module.exports = App;
