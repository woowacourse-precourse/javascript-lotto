const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const InpuVal = require('./InputVal');

class App {
  play() {
    this.inputMoney();
  }
  inputMoney(){
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      Console.print(money);
      let InpuValidation = new InpuVal(money);
      let cnt = money / 1000;
      Console.print(cnt + "개를 구매했습니다.");
      this.buyLotto(cnt);
      this.InputWinninglotteryNum();
    });
  }

  createLottoNum() {
  let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  return lotto;
 } 
  buyLotto(cnt){
    let lottoArr = [];
    for(let i=0; i<cnt;i++){
      let lotto = this.createLottoNum();
      lottoArr.push(lotto);
    }
    for (const lotto of lottoArr) {
      Console.print('[' + lotto + ']');
    }
 }
  InputWinninglotteryNum() {
    Console.readLine('당첨 번호를 입력해 주세요.', (nums) => {
    Console.print(nums);
    });
  }
}
  

const app = new App();
app.play();

module.exports = App;
