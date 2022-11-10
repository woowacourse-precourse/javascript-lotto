class App {
  play() {
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    MISSIONUTILS.Console.readLine("구입금액을 입력해 주세요.\n", function(input) {
      var temp = input/1000;
      purchaseCheck(temp);

      var arr = new Array(temp);
      purchaseShow(MISSIONUTILS, temp);
    });
  }
}

function purchaseCheck(input) {
  if (!Number.isInteger(input)){
    throw new Error("[ERROR] 1000원 단위로 입력하세요");
  }
}

function purchaseShow(MISSIONUTILS, input) {
  MISSIONUTILS.Console.print("");
  MISSIONUTILS.Console.print(input + "개를 구매했습니다.");
}


var a = new App;
a.play();

module.exports = App;
