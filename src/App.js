const MissionUtils = require("@woowacourse/mission-utils");
class App {
  insertedMoney;
  play() {}
  insertMoney(){
    MissionUtils.Console.readLine('구입금액을 입력해주세요 (1000원 단위)', (insertMoney) => {
      this.insertedMoney = insertMoney;
    });
  }
}

module.exports = App;
