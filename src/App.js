//예제테스트
const LottoGameMainSystem = require('../src/components/LottoGameMainSystem');
//app
class App {
  play() {
    const lottoGameMainSystem = new LottoGameMainSystem();
    lottoGameMainSystem.runGame();
  }
}

module.exports = App;
