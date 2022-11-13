const Lotto = require('./Lotto');
const { print, readLine, makeLottoNumber, closeReadLine } = require('./util');
class App {
  #lotto;
  #bonusNumber;
  #myLottos;

  printBoughtLottos({ lottoCount }) {
    print(`${lottoCount}개를 구매했습니다.`);
    this.#myLottos.forEach(lotto => print(lotto));
  }
  async inputBonusNumber() {
    this.#bonusNumber = await readLine('보너스 번호를 입력해 주세요.\n');
  }

  async inputLottoNumber() {
    const inputNumbers = await readLine('당첨 번호를 입력해 주세요.\n');
    const lottoNumbers = inputNumbers.split(',').map(Number);

    this.#lotto = new Lotto(lottoNumbers);
  }

  async buyLottos() {
    const money = await readLine('구입금액을 입력해 주세요.\n');
    const lottoCount = Math.floor(Number(money) / 1000);

    this.#myLottos = makeLottoNumber(lottoCount);
    this.printBoughtLottos({ lottoCount });
  }
  async play() {
    await this.buyLottos();
    await this.inputLottoNumber();
    await this.inputBonusNumber();
    this.#lotto.printStatistics({ myLottos: this.#myLottos, bonusNumber: this.#bonusNumber });

    closeReadLine();
  }
}

new App().play();
module.exports = App;
