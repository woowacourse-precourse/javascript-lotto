class App {
  play() {
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    MISSIONUTILS.Console.readLine("구입금액을 입력해 주세요.\n", function(input) {
      var temp = input;
      MISSIONUTILS.Console.print(temp);
    });
  }
}

var a = new App;
a.play();

module.exports = App;
