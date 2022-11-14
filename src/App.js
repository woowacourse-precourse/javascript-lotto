const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

class App {

  InputCache(){
    Console.readLine('구입금액을 입력해 주세요.', (answer)=>{
      console.log(`금액: ${answer}`);
      Console.print(`${answer}개를 구매했습니다.`);
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
