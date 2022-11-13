const Lotto = require('./Lotto');
const { print, readLine, makeLottoNumber } = require('./util');
class App {
  #lotto;
  #bonusNumber;
  #myLottos;

  printBoughtLottos({ lottoCount }) {
    print(`${lottoCount}개를 구매했습니다.`);
    this.#myLottos.forEach(lotto => print(lotto));
  }
  inputBonusNumber() {
    readLine('보너스 번호를 입력해 주세요.\n', number => (this.#bonusNumber = number));
  }
  inputLottoNumber() {
    readLine('당첨 번호를 입력해 주세요.\n', numbers => {
      const lottoNumbers = numbers.split(',');

      this.#lotto = new Lotto(lottoNumbers);
      this.inputBonusNumber();
    });
  }

  play() {
    readLine('구입금액을 입력해 주세요.\n', money => {
      const lottoCount = Math.floor(Number(money) / 1000);

      this.#myLottos = makeLottoNumber(lottoCount);
      this.printBoughtLottos({ lottoCount });
    });
  }
}

new App().play();
module.exports = App;
