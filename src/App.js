const MissionUtils = require("@woowacourse/mission-utils");
const LottoGenerator = require('./LottoGenerator.js');

const lottoGenerator = new LottoGenerator();


class App {
  constructor(){}

  play() {lottoGenerator.getUserPayment()}
}

module.exports = App;
