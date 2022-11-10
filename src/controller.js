const LottoGenerator = require("./issueLotto");

class LottoGameHandler {
  gameStart() {
    LottoGenerator.checkUserMoney();
  }
}

const LOTTOGAMEHANDLER = new LottoGameHandler();
module.exports = LOTTOGAMEHANDLER;
