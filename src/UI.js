const { print, readLine, close } = require("./Utils");
const { QUERY, MESSAGE } = require("./Constant");

class UI {
  static askHowMuchBuy(callback) {
    readLine(QUERY.HOW_MUCH_BUY, callback);
  }

  static showBoughtLottos(lottoListOfUser) {
    print(`\n${lottoListOfUser.length}${MESSAGE.BOUGHT_LOTTOS}`);
    lottoListOfUser.forEach((lotto) => {
      print(lotto.getNumbers());
    });
  }

  static closeIOstream() {
    close();
  }
}

module.exports = UI;
