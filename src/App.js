const MissionUtils = require("@woowacourse/mission-utils");
class App {
  lottoPrice;

  play() {
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine("구입 금액을 입력해주세요 :", (price) => {
      const isValidInput = this.checkValidPrice(price);
      if (isValidInput == true) {
        this.lottoPrice = price;
        MissionUtils.Console.print(`${price / 1000}개를 구매했습니다.`);
      } else {
        MissionUtils.Console.close();
      }
    });

    return;
  }

  checkValidPrice(price) {
    if (price % 1000 !== 0) {
      throw "[ERROR] invalid price";
    }
    return true;
  }
}

module.exports = App;
