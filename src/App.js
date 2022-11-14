const { GAME_START_MESSAGE } = require("./constants/constant");
const MessageOutput = require("./domain/MessageOutput");
const UserInput = require("./domain/UserInput");

class App {
  play() {
    const messageOutput = new MessageOutput(GAME_START_MESSAGE);
    const userInput = new UserInput("");
  }
}

const app = new App();
app.play();

module.exports = App;
