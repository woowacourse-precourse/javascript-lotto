const isLottoGame = require('./modules/isLottoGame')

class App {
  constructor() {
    this.isLottoGame = new isLottoGame()
  }

  play() {
    this.isLottoGame.createStart()
  }
}

const app = new App();
app.play()

module.exports = App;
