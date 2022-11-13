const { LottoGenerator } = require('./domain');

class App {
  play() {
    const generator = new LottoGenerator();
    const lottoArray = generator.createMultipleLotto(8);

    lottoArray.forEach((lotto) => console.log(lotto.numbers));
  }
}

const app = new App();
app.play();

module.exports = App;
