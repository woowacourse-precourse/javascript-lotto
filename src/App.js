const { GAME_MESSAGE } = require('./lib/Constants');
const { readLine } = require('./lib/Utils');

class App {
  play() {
    readLine(GAME_MESSAGE.input_price, (answer) => this.getLottoPrice(answer));
  }

  getLottoPrice(answer) {
    // TODO
    // 금액 관련 유효성 검사
    // 맴버변수에 금액 저장
  }
}

const app = new App();
app.play();

module.exports = App;
