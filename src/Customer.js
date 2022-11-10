const MissionUtils = require("@woowacourse/mission-utils");

class Customer {
  buyLotto() {
    const input = MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (value) => {
        return value;
      }
    );
    const inputInt = parseInt(input);
    if (inputInt % 1000 !== 0) throw new Error("[ERROR]");
    return inputInt / 1000;
  }
}

module.exports = Customer;
