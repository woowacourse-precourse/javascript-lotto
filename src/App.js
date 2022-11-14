const { GAME_START_MESSAGE } = require("./constants/constant");
const MessageOutput = require("./domain/MessageOutput");

class App {
  play() {
    const messageOutput = new MessageOutput(GAME_START_MESSAGE);
  }
}

const app = new App();
app.play();

module.exports = App;
