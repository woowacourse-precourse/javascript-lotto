const MissionUtils = require("@woowacourse/mission-utils");
import Lotto from './Lotto';
class App {
  play() {
    let cntLotto = InputMoney();
    let Lotto_list = makeLottos(cntLotto);
    printLotto(Lotto_list);
    let WinningNumber = InputWinningNumber();
    let BonusNumber = InputBonusNumber();
    checkWinning(cntLotto,Lotto_list, WinningNumber, BonusNumber);
  }

  checkWinning(cntLotto, Lotto_list, WinningNumber, BonusNumber)
  {
    let array = new Array(5);
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
    printStatus(cntLotto,array);
  }

  checkStatus(cnt, BonusNumber){
    if(cnt== 3)
      return 0;
    if(cnt == 4)
      return 1;
    if(cnt == 5 && BonusNumber == 0)
      return 2;
    else if (cnt == 5 && BonusNumber)
      return 3;
    else
      return 4;
  }

  printStatus(cntLotto,array){
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    const msg =['3개 일치 (5,000원) - ','4개 일치 (50,000원) - ','5개 일치 (1,500,000원) - ','5개 일치, 보너스 볼 일치 (30,000,000원) - ','6개 일치 (2,000,000,000원) - '];
    const award=[5000,50000,1500000,30000000,2000000000];
    let money=0;
    for(let i = 0; i < 5 ;i++)
    {
      MissionUtils.Console.print(msg[i]+array[i]+'개');
      money+= award[i]*array[i];
    }
    money/=(cntLotto*1000);
    money*=100;
    money.toFixed(2);
    MissionUtils.Console.print('총 수익률은 ' + money.toFixed(2) + '%입니다.');
  }

  InputWinningNumber(){
    let num=[];
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      winning = input.split(',');
      for(let n of winning)
        num.push(parseInt(n));
    });
    return num;
  }

  InputBonusNumber(){
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
    for(let lotto of Lotto_list)
    MissionUtils.Console.print(lotto);
  }


}

module.exports = App;
