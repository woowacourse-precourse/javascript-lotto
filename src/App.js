const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("../src/Lotto.js");

class App {
  play() {
    //필요한 변수 선언
    let obj = {3:[0,0], 4:[0,0], 5:[0,0], '5+보너스':[0,0], 6:[0,0]};
    let amount = 0;
    let userLottoNumbers;
    let payCash = '';
    let lottoEa = 0;
    let lottos = [];
    let bonusNum = '';
    const realLottoNumbers = [];

    function payMoney(){
      MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
        payCash = answer;
      });
    }

    function checkMoney(){
      if (Number.isNaN(Number(payCash))){
        throw new Error("[ERROR] 숫자를 입력해주세요.");
      } else if (parseInt(payCash) !== Number(payCash)){
        throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
      } else if (Number(payCash)%1000 !== 0){
        throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
      } else if (Number(payCash) < 1000){
        throw new Error("[ERROR] 1,000원 이상으로 구매 가능합니다.");
      }
    }

    function countLotto(){
      lottoEa = parseInt(payCash/1000);
      MissionUtils.Console.print(`${lottoEa}개를 구매했습니다.`);
    }

    function issueLottoNumbers(){
      let tempLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return tempLotto;
    }

    function issueLottos(){
      for (let ind = 0; ind < lottoEa; ind++){
        let lotto = issueLottoNumbers();
        lotto.sort(function(comp1, comp2){
          return comp1 - comp2;
        });
        lottos.push(lotto);
      }
    }

    function showLottos(){
      for (let ind = 0; ind < lottos.length; ind++){
        MissionUtils.Console.print("[" + lottos[ind].join(', ') + "]");
      }
    }

    function getUserLottoNumbers(){
      MissionUtils.Console.readLine("당첨 번호를 입력해주세요.", (answer) => {
        let temp = answer.split(',');
        userLottoNumbers = temp.map((ind) => Number(ind));
        userLottoNumbers = new Lotto(temp.map((ind) => Number(ind)));
      });
    }

    function getUserBonusNumber(){
      MissionUtils.Console.readLine("보너스 번호를 입력해주세요.", (answer) => {
        bonusNum = answer;
        if (parseInt(bonusNum) != Number(bonusNum)){
          throw new Error("[ERROR] 제대로 입력해주세요.");
        } else if (parseInt(bonusNum) > 45 || parseInt(bonusNum) <= 0){
          throw new Error("[ERROR] 1 ~ 45사이의 숫자를 입력해주세요.");
        }
      });
    }

    function calculateLotto(pcs){
      if (pcs == 3){
        obj[pcs][0] += 1;
        obj[pcs][1] += 5000;
      } else if (pcs == 4){
        obj[pcs][0] += 1;
        obj[pcs][1] += 50000;
      } else if (pcs == 5){
        obj[pcs][0] += 1;
        obj[pcs][1] += 1500000;
      } else if (pcs == 6){
        obj[pcs][0] += 1;
        obj[pcs][1] += 2000000000;
      }
    MissionUtils.Console.print(obj);
    }

    function compareLottoNumber(lottoIndNum){
      let cnt = 0;
      for (let ind=0; ind < userLottoNumbers.getNumbers().length; ind++){
        if (lottos[lottoIndNum].includes(userLottoNumbers.getNumbers()[ind])){
          cnt += 1;
        }
      }
      if (cnt == 5 && bonusNum in lottos[lottoIndNum]){
        obj['5+보너스'][0] += 1;
        obj['5+보너스'][1] += 30000000;
      } else if (cnt > 2 && cnt < 7){
          calculateLotto(cnt);
      }
      cnt = 0;
    }

    function sendLotto(){
      for (let ind=0; ind < lottos.length; ind++){
        compareLottoNumber(ind);
      }
    }

    function statisticYield(){
      for (let val in obj){
        amount += parseInt(obj[val][1]);
      }
      amount = amount / parseInt(payCash) * 100;
      amount = amount.toFixed(1);
    }

    function printResult(){
      MissionUtils.Console.print('당첨 통계');
      MissionUtils.Console.print('---');
      MissionUtils.Console.print(`3개 일치 (5,000원) - ${obj[3][0]}개`);
      MissionUtils.Console.print(`4개 일치 (50,000원) - ${obj[4][0]}개`);
      MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${obj[5][0]}개`);
      MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${obj['5+보너스'][0]}개`);
      MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${obj[6][0]}개`);
      MissionUtils.Console.print(`총 수익률은 ${amount}%입니다.`);
      MissionUtils.Console.close();
    }

    payMoney();
    checkMoney();
    countLotto();
    issueLottos();
    showLottos();
    getUserLottoNumbers();
    getUserBonusNumber();
    sendLotto();
    statisticYield();
    printResult();
  } //Play() 닫는 닫는 괄호
}//class App 닫는괄호

module.exports = App;
