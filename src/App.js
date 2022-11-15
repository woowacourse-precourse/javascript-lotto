const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lottos=[];
    this.lottoCount=0;
  }

  InputWinLotto(){
    Console.readLine('당첨 번호를 입력해 주세요.', (answer)=>{
      // console.log(answer, typeof(answer)); // 1,2,3,4,5,6 -> [1, 2, 3, 4, 5, 6]
      const splitNum = answer.split(',');
      // console.log(splitNum, typeof(splitNum)); // 1,2,3,4,5,6 -> [1, 2, 3, 4, 5, 6]

      const lotto = new Lotto(splitNum);
      // console.log(`당첨 번호 : ` + lotto.getNumbers());
    })
    Console.close();
  }

  CreateLottoNum(){
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
  
  CreateUserLottoNum(){
    for(let idx=0; idx<this.lottoCount; idx++){
      const lottoNum = this.CreateLottoNum();
      console.log(lottoNum);

      const lotto = new Lotto(lottoNum);
      this.lottos.push(lotto);
      console.log(lotto.getNumbers());
    }
  }

  isValidCacheInput(answer){
    const lottotemp = answer/1000;
    if(!Number.isInteger(lottotemp)) {
      throw new Error("[ERROR] 이상한 입력");
    }
    return lottotemp;
  }


  InputCache(){
    Console.readLine('구입금액을 입력해 주세요.', (answer)=>{
      // 맞는지 확인하는 함수
      this.lottoCount = this.isValidCacheInput(answer);
      Console.print(`${this.lottoCount}개를 구매했습니다.`);
    })
    Console.close();
  }



  play() {
    // 금액 입력
    this.InputCache();
      // 금액에 맞는 로또 수량 발행
      // 해당 갯수에 맞는 로또 번호 생성
    this.CreateUserLottoNum();
    // 당첨번호 입력
    this.InputWinLotto();
    // 보너스 번호 입력
    //InputBonusLotto();
      // 당첨번호와 사용자 번호 비교
     // CheckWin();
    // 출력
    //PrintLotto();
  }
}

module.exports = App;
