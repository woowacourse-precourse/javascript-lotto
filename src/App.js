const MissionUtils = require("@woowacourse/mission-utils");

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
      });
    }
  } //Play() 닫는 닫는 괄호
}//class App 닫는괄호

module.exports = App;
