const Lotto = require("./Lotto");
const lotto=new Lotto()

class App {
  play() {
    lotto.getUserInputMoney()
  }
}
const app=new App();
app.play()

module.exports = App;
