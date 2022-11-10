const Lotto = require("./Lotto");
const lotto=new Lotto()

class App {
  play() {
    lotto.computerRamberNumber()
  }
}
const app=new App();
app.play()

module.exports = App;
