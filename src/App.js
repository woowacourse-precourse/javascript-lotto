class App {
  play() {
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    
    MISSIONUTILS.Console.readLine("구입금액을 입력해 주세요.\n", function(input) {
      var temp = input/1000;
      purchaseCheck(temp);

      purchaseShow(MISSIONUTILS, temp);

      var arr = new Array(temp);
      makeLotto(MISSIONUTILS, arr, temp)
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

function makeLotto(MISSIONUTILS, arr, input) {
  const LOTTO = require("../src/Lotto");
  for (var i = 0; i<input; i++){
    arr[i] = new LOTTO(MISSIONUTILS.Random.pickUniqueNumbersInRange(1, 45, 6));
    arr[i].sort();
    arr[i].print();
  }
}

var a = new App;
a.play();

module.exports = App;
