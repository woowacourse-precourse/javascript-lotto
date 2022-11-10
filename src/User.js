const MissionUtils = require("@woowacourse/mission-utils");
class User {
  constructor() {}
  inputAmount() {
    let amount = "";
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      amount = answer;
      if (+answer % 1000 > 0) {
        throw new Error("[ERROR] 복권은 천원 단위로만 구매 가능합니다.");
      }
      MissionUtils.Console.print(answer);
    });
    return amount;
  }
}
module.exports = User;
