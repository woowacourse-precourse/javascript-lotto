const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const InpuVal = require('./InputVal');
const LottoVal = require('./Lotto');
const BonusVal = require('./BonusVal');
const MESSAGE = ['3개 일치',
'4개 일치',
'5개 일치',
'5개 일치, 보너스 볼 일치',
'6개 일치',];
const MONEY = [5000, 50000, 1500000, 30000000, 2000000000];
class App {
  play() {
    this.inputMoney();
    this.lottoArr =[];
    this.winningNum = [];
  }
  inputMoney(){
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      Console.print(money);
      let InpuValidation = new InpuVal(money);
      let cnt = money / 1000;
      Console.print(cnt + "개를 구매했습니다.");
      this.buyLotto(cnt);
      this.InputWinninglotteryNum();
      this.InputBonusNum();
      const result = this.getStatistics();
      this.printStatistics(result);
      Console.close();
    });
  }

  createLottoNum() {
  let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  return lotto;
 } 
  buyLotto(cnt){
    this.lottoArr = [];
    for(let i=0; i<cnt;i++){
      let lotto = this.createLottoNum();
      this.lottoArr.push(lotto);
    }
    for (const lotto of this.lottoArr) {
      Console.print('[' + lotto + ']');
    }
 }
  InputWinninglotteryNum() {
    Console.readLine('당첨 번호를 입력해 주세요.', (nums) => {
    console.log(nums);
    this.winningNum = this.winningNumToNumArr(nums);
    const lotto = new LottoVal(this.winningNum);
    });
  }
  winningNumToNumArr(nums) {
    const replaceNum= nums.replace(/,/g, '');
    return replaceNum
  }

  InputBonusNum() {
    Console.readLine('보너스 번호를 입력해 주세요.', (bonus) => {
      console.log(bonus);
      let num = Number(bonus);
      new BonusVal(num, this.winningNum)
    });
  }

  Ranking(lottos) {
    const matchingNums = lottos.filter((number) => this.winningNum.includes(number));
    const matchingCnt = matchingNums.length;
    const isBonus = lottos.includes(this.bonus);

    switch(matchingCnt) {

      case 6:
        return 1;
      case 5:
        if(isBonus) return 2;
        else return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 6;

    }
  }
  getStatistics() {
    const res = new Array(6).fill(0);
    this.lottoArr.map((lotto) => {
      const ranking = this.Ranking(lotto);
      res[ranking] += 1;
    });
    return res.slice(1, 6).reverse();
  }
  printStatistics(result) {
    Console.print('당첨 통계');
    Console.print('---');
    result.map((cnt, idx) => {
      const matchingMessage = MESSAGE[idx];
      const winningMoney = MONEY[idx].toLocaleString();
      Console.print(`${matchingMessage} (${winningMoney}원) - ` + cnt + '개');
    });
  }
}
  

const app = new App();
app.play();

module.exports = App;
