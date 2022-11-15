const LottoBuild = require("./Lotto");
const LENGTH = 6;
class App {
  constructor() {
    this.game = new LottoBuild().setTargetLength(LENGTH).build(); //constructor 생성자 생성
  }
  play() {
    this.game.play();
  }
}
const app = new App();
app.play();
module.exports = App;
