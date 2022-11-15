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

  InputWinningNumber(){
    let num=[];
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      winning = input.split(',');
      for(n of winning)
        num.push(parseInt(n));
    });
    return num;
  }

  InputWinningNumber(){
    let num;
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      num = parseInt(input);
    });
    return num;
  }

  InputMoney(){
    let money;
    let cntLotto;

    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      money = parseInt(input);
    });
    if(money < 1000 || money % 1000 !== 0)
      throw new error("[ERROR] 잘못된 입력입니다.");
    cntLotto = money/1000;
    MissionUtils.Console.print(cntLotto +'개를 구매했습니다.');
    return cntLotto;
  }

  makeLottos(cntLotto){
    let Lotto_list = [];
    for(let i = 0;i<cntLotto;i++)
    {
        let num = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 2);
        let lotto = new Lotto(num);
        Lotto_list.push(lotto);
    }
    return Lotto_list;
  }

  printLotto(Lotto_list){
    for(lotto of Lotto_list)
    MissionUtils.Console.print(lotto);
  }




}

module.exports = App;
