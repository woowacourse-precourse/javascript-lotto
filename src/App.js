const { LottoGenerator } = require('./domain');

class App {
  play() {
    const generator = new LottoGenerator();
    const numbers = generator.createLottoNumbers();
    console.log(numbers);
  }
}

const app = new App();
app.play();

module.exports = App;
