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

  checkWinning(Lotto_list, WinningNumber, BonusNumber)
  {
    MissionUtils.Console.print('��÷ ���');
    MissionUtils.Console.print('---');
    let array = new Array(6);
    for(let lotto of Lotto_list)
    {
      let cnt = 0;
      let bonus = 0;
      num = lotto.getNumbers();
      for(let n of WinningNumber)
        cnt += num.indexof(n) == -1 ? 0 : 1;
      bonus = num.indexof(BonusNumber) == -1 ? 0: 1;
      if(cnt >= 3)
        array[checkStatus(cnt, BonusNumber)]++;
    }
  }

  InputWinningNumber(){
    let num=[];
    MissionUtils.Console.readLine('���Աݾ��� �Է��� �ּ���.', (input) => {
      winning = input.split(',');
      for(let n of winning)
        num.push(parseInt(n));
    });
    return num;
  }

  InputBonusNumber(){
    let num;
    MissionUtils.Console.readLine('���Աݾ��� �Է��� �ּ���.', (input) => {
      num = parseInt(input);
    });
    return num;
  }

  InputMoney(){
    let money;
    let cntLotto;

    MissionUtils.Console.readLine('���Աݾ��� �Է��� �ּ���.', (input) => {
      money = parseInt(input);
    });
    if(money < 1000 || money % 1000 !== 0)
      throw new error("[ERROR] �߸��� �Է��Դϴ�.");
    cntLotto = money/1000;
    MissionUtils.Console.print(cntLotto +'���� �����߽��ϴ�.');
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
    for(let lotto of Lotto_list)
    MissionUtils.Console.print(lotto);
  }


}

module.exports = App;
