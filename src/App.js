const Input = require('./utils/Input');

class App {
  play() {
    Input.lottoCost();
  }
}

const app = new App();
app.play();

module.exports = App;
