class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");

    MissionUtils.Console.readLine("구입금액을 입력해 주세요."), (purchase) => {
      const purchaseInput = purchase;
      console.log(purchaseInput);

      if(purchaseInput % 1000 != 0) {
        throw new Error('예외 발생- 1,000원 단위로 입력해주세요.');
      }
    };
  
  }
}

module.exports = App;
