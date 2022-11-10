const Lotto = require('./Lotto');
const Checker = require('./Checker');
const Convertor = require('./utils/Convertor');

class Game {
  #lotto;

  constructor() {
    this.#lotto = new Lotto();
  }

  playLotto() {
    this.#lotto.buy(this.startLottoSimulation.bind(this));
  }

  startLottoSimulation(priceString) {
    Checker.isValidPriceString(priceString);
    const price = Convertor.stringToNumber(priceString);
    Checker.isValidPrice(price);
    // 로또 발행
    // 보유한 로또 출력
    // 당첨 번호 등록
    // 당첨 결과 계산
    // 결과 출력
  }
}

module.exports = Game;
