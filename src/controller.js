const LottoGenerator = require("./issueLotto");

class LottoGameHandler {
  gameStart() {
    LottoGenerator.generateLotto();
  }
}

const LOTTOGAMEHANDLER = new LottoGameHandler();
module.exports = LOTTOGAMEHANDLER;
