const { print, readLine, makeLottoNumber } = require('./util');
class App {
  #lottoCount;

  buyLotto() {
    readLine('구입금액을 입력해 주세요.', money => {
      this.#lottoCount = Math.floor(Number(money) / 1000);
    });
  }
  play() {}
}

new App().buyLotto();
module.exports = App;
