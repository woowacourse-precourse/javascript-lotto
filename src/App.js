const LottoGameController = require("./controller/LottoGameController");
const { close } = require("./utils/Missionutils");
class App {
  play() {
    new LottoGameController().start();
    close();
  }
}

module.exports = App;
