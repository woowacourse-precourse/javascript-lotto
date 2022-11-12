const { Console } = require('@woowacourse/mission-utils');
const GameGuide = require('./GameGuide');
const gameGuide = new GameGuide();

class App {
  enterUserInput() {
    gameGuide.printInputGuideText('구입금액');
    Console.readLine('', (inputValue) => {
      console.log(inputValue);
    });
  }

  play() {
    this.enterUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;
