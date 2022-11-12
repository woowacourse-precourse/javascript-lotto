const { Console, Random } = require('@woowacourse/mission-utils');
const Shop = require('./Shop')

class App {
  shop = new Shop();

  play() {
    this.shop.pay();

  }

  
}

const app = new App();
app.play();

module.exports = App;
