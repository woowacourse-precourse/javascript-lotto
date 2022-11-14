const MissionUtils = require('@woowacourse/mission-utils');
const User = require('./User');

class App {
  play() {
    const user = new User();
    user.readInput();
  }
}

const app = new App();
app.play();
// module.exports = App;
