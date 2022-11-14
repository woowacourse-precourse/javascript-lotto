const { LOTTO_PAYMENT } = require('./const');
const Lotto = require('./Lotto');
const { print, readLine, makeLottoNumber } = require('./util');

class App {
  #lotto;
  #bonusNumber;
  #myLottos;

  printBoughtLottos({ lottoCount }) {
    print(`${lottoCount}개를 구매했습니다.`);
    this.#myLottos.forEach(lotto => print(`[${lotto.join(', ')}]`));
  }
  inputBonusNumber() {
    readLine('보너스 번호를 입력해 주세요.\n', number => {
      this.#bonusNumber = number;

      this.#lotto.printStatistics({ myLottos: this.#myLottos, bonusNumber: this.#bonusNumber });
    });
  }
  inputLottoNumber() {
    readLine('당첨 번호를 입력해 주세요.\n', inputNumbers => {
      const lottoNumbers = inputNumbers.split(',').map(Number);

      this.#lotto = new Lotto(lottoNumbers);
      this.inputBonusNumber();
    });
  }

  buyLottos() {
    readLine('구입금액을 입력해 주세요.\n', money => {
      const lottoCount = Math.floor(Number(money) / LOTTO_PAYMENT);

      if (isNaN(money)) {
        throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
      }
      if (money < 1000) {
        throw new Error('[ERROR] 1000원 이상을 입력해 주세요.');
      }
      this.#myLottos = makeLottoNumber(lottoCount);
      this.printBoughtLottos({ lottoCount });

      this.inputLottoNumber();
    });
  }
  play() {
    this.buyLottos();
  }
}
new App().play();
module.exports = App;
