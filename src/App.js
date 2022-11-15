const LottoMachineController = require('./controller/LottoMachineController.js');

class App {
  constructor() {
    this.lottoMachineController = new LottoMachineController();
  }

  play() {
    this.lottoMachineController.start();
  }
}

const app = new App();
app.play();

module.exports = App;
