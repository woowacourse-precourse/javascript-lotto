class App {
  play() {
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    MISSIONUTILS.Console.readLine("구입금액을 입력해 주세요.\n", function(input) {
      var temp = input/1000;
      purchaseCheck(temp);
    });
  }
}

function purchaseCheck(input) {
  if (!Number.isInteger(input)){
    throw new Error("[ERROR] 1000원 단위로 입력하세요");
  }
}


var a = new App;
a.play();

module.exports = App;
