class App {
  play() {
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    const LOTTO = require("../src/Lotto");

    var answer = [0,0,0,0,0];
    var money = [5000,50000,1500000,30000000,2000000000];
    
    MISSIONUTILS.Console.readLine("구입금액을 입력해 주세요.\n", function(input) {
      var temp = input/1000;
      purchaseCheck(temp);

      purchaseShow(MISSIONUTILS, temp);

      var arr = new Array(temp);
      makeLotto(MISSIONUTILS, arr, temp, LOTTO);

      winCheck(MISSIONUTILS, LOTTO, arr, answer, money);
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

function winCheck(MISSIONUTILS, LOTTO, arr, answer, money) {
  var win;
  MISSIONUTILS.Console.readLine("\n당첨 번호를 입력해 주세요.\n", function(input1) {
    win = input1.split(",").map(Number);
    win = new LOTTO(win);
    win.sort();
    win.print();

    bonusCheck(MISSIONUTILS, win, arr, answer, money);
  });
}

function bonusCheck(MISSIONUTILS, win, arr, answer, money) {
  MISSIONUTILS.Console.readLine("\n보너스 번호를 입력해 주세요.\n", function(input2) {
    bonus = input2;
    validateBonus(bonus,win);
    matchWin(MISSIONUTILS, win, bonus, arr, answer)
    showWin(MISSIONUTILS, answer, money)
  });
}

function validateBonus(bonus, win) {
  if (isNaN(bonus)){
    throw new Error("[ERROR] 보너스 번호는 숫자만 가능합니다");
  }
  
  bonus = Number(bonus);

  if(bonus<1 || bonus>45){
    throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  }

  win.checkBonus(bonus);
}

function matchWin(MISSIONUTILS, win, bonus, arr, answer){
  for (var a of arr){
    correct = a.match(win, bonus);
    MISSIONUTILS.Console.print(correct);
    matchCorrect(correct, answer)
  }
}

function matchCorrect(correct, answer){
  if (correct[0] == 3){
    answer[0]++;
    return;
  }
  if (correct[0] == 4){
    answer[1]++;
    return;
  }
  if (correct[0] == 5){
    plusCorrect(correct, answer);
  }
  if (correct[0] == 6){
    answer[4]++;
    return;
  }
  return;
}

function plusCorrect(correct, answer){
  if (correct[1] == 1){
    answer[3]++;
    return;
  }
  answer[2]++;
}

function showWin(MISSIONUTILS, answer, money){
  var index = 0;
  var price = 0;
  for (var j = 3; j<=6; j++){
    price += money[index] * answer[index];
    MISSIONUTILS.Console.print(j + "개 일치 (" + money[index].toLocaleString() + ") - " + answer[index] + "개"); 
    if (j==5){
      index++;
      price += money[index] * answer[index];
      MISSIONUTILS.Console.print(j + "개 일치, 보너스 볼 일치 (" + money[index].toLocaleString() + ") - " + answer[index] + "개");
    }
    index++;
  }
}

var a = new App;
a.play();

module.exports = App;
