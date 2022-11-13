const { Console, Random } = require('@woowacourse/mission-utils');
const User = require('./User');
const { CMM_INPUT_MONEY, CMM_BUY_LOTTO } = require('./Constants');

class App {
  play() {
    Console.readLine(CMM_INPUT_MONEY, (input) => {
      const user = new User(input);
      
      Console.close();
    });
  }
}

module.exports = App;

const app = new App();
app.play();
