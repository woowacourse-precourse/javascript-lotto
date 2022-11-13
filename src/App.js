const { print, readLine, makeLottoNumber } = require('./util');
class App {
  #lottos;
  buyLotto() {
    readLine('구입금액을 입력해 주세요.\n', money => {
      const lottoCount = Math.floor(Number(money) / 1000);

      console.log(lottoCount);
      this.#lottos = makeLottoNumber(lottoCount);
      this.printBoughtLottos({ lottoCount });
    });
  }
  printBoughtLottos({ lottoCount }) {
    print(`${lottoCount}개를 구매했습니다.`);
    this.#lottos.forEach(lotto => print(lotto));
  }
  play() {
    this.buyLotto();
  }
}

new App().play();
module.exports = App;
