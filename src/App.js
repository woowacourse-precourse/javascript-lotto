const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");

class App {

  async play() {
    const LottoCount = await this.inputMoney();
  }

  inputMoney(){
    let count;
    MissionUtils.Console.readLine("구입 금액을 입력해주세요.\n",(money)=>{
      if(money % 1000 != 0)
        throw new Error("[ERROR] 1000원 이상의 단위만 입력받을 수 있습니다.");
      count = money / 1000;
      MissionUtils.Console.print("\n" + count + "개를 구매했습니다.");
    });
    return count;
  }

}

module.exports = App;