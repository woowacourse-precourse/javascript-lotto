const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  
  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", money => {
      if (money % 1000 !== 0) throw new Error("[ERROR] 천 원 단위로 넣어주세요.")
      this.money = money;
      MissionUtils.Console.print(`${money / 1000}개를 구매했습니다.`);
      this.makeUserLotto();        //뒤에 랜덤번호 생성
      this.makeWinningLotto();       // 뒤에 당첨번호 생성
    });
  }
}

module.exports = App;
