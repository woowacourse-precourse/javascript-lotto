const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const Validation = require('./Validation');
const GenerateLotto = require('./GenerateLotto');
const Const = require('./Const');
class App {
  constructor() {
    this.lottoCount = null;
    this.lottos = [];
  }
  play() {
    Console.readLine(Const.BUY_LOTTO_MESSAGE, price => {
      Validation.checkInputPrice(price);
      this.lottoCount = GenerateLotto.carculateLottoCount(price);
      GenerateLotto.printLottoCount(this.lottoCount);
      this.lottos = GenerateLotto.generateLottoNumber(this.lottoCount);
    });
  }
}

module.exports = App;
