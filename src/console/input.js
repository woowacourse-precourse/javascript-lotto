const console = require("./console");

class input extends console {
  readLine(callback, message = "") {
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  }
}

module.exports = input;
