const Machine = require('./Machine');

class App {
  play() {
    const machine = new Machine();
    machine.sell();
  }
}

const app = new App();
app.play();

module.exports = App;
