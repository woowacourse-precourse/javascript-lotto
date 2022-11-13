const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  play() {
    new Lotto();
  }
}
const app = new App();
app.play();
module.exports = App;
