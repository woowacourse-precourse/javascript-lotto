class App {
  play() {
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    const LOTTO = require("../src/Lotto");
    
    MISSIONUTILS.Console.readLine("구입금액을 입력해 주세요.\n", function(input) {
      var temp = input/1000;
      purchaseCheck(temp);

      purchaseShow(MISSIONUTILS, temp);

      var arr = new Array(temp);
      makeLotto(MISSIONUTILS, arr, temp, LOTTO);

      winCheck(MISSIONUTILS, LOTTO);
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

function makeLotto(MISSIONUTILS, arr, input, LOTTO) {
  for (var i = 0; i<input; i++){
    arr[i] = new LOTTO(MISSIONUTILS.Random.pickUniqueNumbersInRange(1, 45, 6));
    arr[i].sort();
    arr[i].print();
  }
}

function winCheck(MISSIONUTILS, LOTTO) {
  var win;
  MISSIONUTILS.Console.readLine("\n당첨 번호를 입력해 주세요.\n", function(input1) {
    win = input1.split(",").map(Number);
    win = new LOTTO(win);
    win.sort();
    win.print();

    bonusCheck(MISSIONUTILS, win);
  });
}

function bonusCheck(MISSIONUTILS, win) {
  MISSIONUTILS.Console.readLine("\n보너스 번호를 입력해 주세요.\n", function(input2) {
    bonus = input2;
    
  });
}

var a = new App;
a.play();

module.exports = App;
