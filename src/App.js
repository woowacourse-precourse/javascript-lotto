const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Lotto = require("./Lotto");

class App {

  isValidCacheInput(answer){
    const lottoCount = answer/1000;
    if(!Number.isInteger(lottoCount)) {
      throw new Error("[ERROR] 이상한 입력");
    }
    return lottoCount;
  }


  InputCache(){
    Console.readLine('구입금액을 입력해 주세요.', (answer)=>{
      // 맞는지 확인하는 함수
      const lottoCount = this.isValidCacheInput(answer);
      Console.print(`${lottoCount}개를 구매했습니다.`);
    })
    Console.close();
  }



  play() {
    // 금액 입력
    this.InputCache();
      // 금액에 맞는 로또 수량 발행
      // 해당 갯수에 맞는 로또 번호 생성
      //CreateUserLotto();
    // 당첨번호 입력
    //InputWinLotto();
    // 보너스 번호 입력
    //InputBonusLotto();
      // 당첨번호와 사용자 번호 비교
     // CheckWin();
    // 출력
    //PrintLotto();
  }
}

module.exports = App;
