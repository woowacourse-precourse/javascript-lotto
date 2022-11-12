const { LottoGenerator } = require('./domain');

class App {
  play() {
    const generator = new LottoGenerator();
    const lotto = generator.createLotto();
    console.log(lotto.numbers);
  }
}

const app = new App();
app.play();

module.exports = App;
