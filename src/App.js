const Process = require("./Process");

class App {
  play() {
    Process.getPaymentAmount();
  }
}

module.exports = App;

const app = new App();
app.play();