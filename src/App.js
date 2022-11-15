const View = require("./View");
const lotto = new View();
class App {
  play() {
    console.log("his");
    lotto.lottoStart();
  }
}
const app = new App();
app.play();
module.exports = App;
