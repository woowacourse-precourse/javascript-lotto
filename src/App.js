const Lotto = require("./Lotto");
const MissionUtil = require("@woowacourse/mission-utils");
class App {
  constructor(){
    this.cost = 0;
    this.lottoNum = [];
    this.WinningNum = Array(6).fill(0);
    this.checkList = Array(46).fill(0);
  }
  play() {
    this.Money();
  }
  Money(){
    MissionUtil.Console.readLine("구입금액을 입력해주세요.",(value) => {
      this.cost = this.checkMoney(value);
      this.NumOfLotto(Number(value));
    })
  }
  checkMoney(money){
    if(isNaN(money)){
      throw new Error("[ERROR] 입력 금액은 숫자여야 합니다.");
    }
    if(Number(money)%1000!==0){
      throw new Error("[ERROR] 1000원 단위 금액을 입력해주세요");
    }
    return Number(money);
  }
  NumOfLotto(num){
    const NumberOfLottos = num/1000;
    MissionUtil.Console.print(NumberOfLottos+'개를 구매했습니다.');
    this.LottoList(NumberOfLottos);
    this.printLotto(this.lottoNum);
  }
  LottoList(num){
    for(var i = 0;i<num;i++){
      this.lottoNum.push(new Lotto(MissionUtil.Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
  }
  printLotto(list){
    let result = "";
    for(let i in list){
      result+="\n" + list[i].printList();
    }
    MissionUtil.Console.print(result);
    this.getLottoNum();
  }
  getLottoNum(){
    MissionUtil.Console.readLine('당첨 번호를 입력해 주세요. ',(value)=>{
      let lst = value.split(",").map(Number);
      if(lst.length!==6){
        throw new Error("[ERROR] 당첨번호는 6개여야 합니다.");
      }
      for(let i in lst){
        this.catchError(lst[i],2);
      }
      this.getBonusNum();
    });
  }
  getBonusNum(){
    MissionUtil.Console.readLine('보너스 번호를 입력해주세요. ',(value)=>{
      this.catchError(Number(value),1);
      this.checkRank();
    });
  }
  checkRank(){
    for(let i in this.lottoNum){
      let j = this.lottoNum[i].check(this.checkList);
      this.WinningNum[j]++;
    }
    this.printResult();
  }
  catchError(int, value){
    if(isNaN(int)){
      throw new Error("[ERROR] 입력 금액은 숫자여야 합니다.");
    }
    if(int<1||int>45){
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if(this.checkList[int]>0){
      throw new Error("[ERROR] 중복되지 않는 수를 입력해야 합니다.");
    }
    this.checkList[int]+=value;
  }
  printResult(){
    console.log(this.WinningNum);
    var reward = 2000000000*this.WinningNum[5]+30000000*this.WinningNum[4]+1500000*this.WinningNum[3]+50000*this.WinningNum[2]+5000*this.WinningNum[1];
    MissionUtil.Console.print('3개 일치 (5,000원) - '+this.WinningNum[1]+'개\n'+'4개 일치 (50,000원) - '+this.WinningNum[2]+'개\n'
    +'5개 일치 (1,500,000원) - '+this.WinningNum[3]+'개\n'+'5개 일치, 보너스 볼 일치 (30,000,000원) - '+this.WinningNum[4]+'개\n'+
    '6개 일치 (2,000,000,000원) - '+this.WinningNum[5]+'개\n'+'총 수익률은 '+ ((reward/this.cost)*100)+'%입니다.');
    MissionUtil.Console.close();
  }
}

module.exports = App;
