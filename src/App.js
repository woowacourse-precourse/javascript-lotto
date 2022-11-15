const { print, readLine } = require('./utils');
const { LOTTO_PRICE } = require('./var');
const {Random} = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto');
class App {
  #lotto;
  #madeLotto;
  #bonusNumber;
  play() {
    this.inputPrice();
  }

  inputPrice(){
    readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.checkInputPrice(money);
    })
  }

  checkInputPrice(money){
    if (isNaN(money)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
    if (money < 1000) {
      throw new Error('[ERROR] 1000원 이상을 입력해 주세요.');
    }
    if (!isNaN(money) && money >= 1000) {
      const countLotto = Math.floor(Number(money) / LOTTO_PRICE);
      print(`${countLotto}개를 구매했습니다.\n`);
      this.#madeLotto = this.makingLottoNumbers(countLotto);
      this.#madeLotto.forEach(lottoNumber => print(`[${lottoNumber.join(', ')}]`));
      this.inputNumbers();
    }
  }

  makingLottoNumbers(count) {
    let lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      let lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottoNumbers.push(lottoNumber);
    }
    return lottoNumbers;
  }

  inputNumbers() {
    this.inputLottoNumbers();
    this.inputBonusLottoNumbers();
  }

  inputLottoNumbers() {
    readLine('당첨 번호를 입력해 주세요.\n', lottoNumber => {
      const lottoNumbers = lottoNumber.split(',').map(Number);
      this.#lotto = new Lotto(lottoNumbers);
    })
  }

  inputBonusLottoNumbers() {
    readLine('보너스 번호를 입력해 주세요.\n', bonusNumber => {
      this.#bonusNumber = bonusNumber;
      this.#lotto.statistics({ madeLotto: this.#madeLotto, bonusNumber: this.#bonusNumber });
    })
  }
}
new App().play();
module.exports = App;
