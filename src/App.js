const MissionUtils = require("@woowacourse/mission-utils");

const PURCHASE_MONEY = '구입금액을 입력해 주세요.';

class App {
  play() {
    userWindow(PURCHASE_MONEY, lottoCount);
  }
}

const userWindow = (window, callback) => {
  MissionUtils.Console.readLine(`${window}\n`, (input) => {
    callback(input);
  });
};

new App().play();

module.exports = App;
