class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    var checkArray = [];
    for (var n of numbers){
      checkNum(n);
      checkNumLotto(n);
      checkArr(checkArray,n);
    }
  }

  sort(){
    this.#numbers.sort(function(a, b) {
      return a - b;
    }); 
  }

  print(){
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    MISSIONUTILS.Console.print(this.#numbers);
  }
  
  checkBonus(bonus){
    if (this.#numbers.includes(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.");
    }
  }
  
  match(win , bonus){
    var index = [0,0];
    var correct = [0,0];

    var number1 = this.#numbers;
    var number2 = win.#numbers;

    while(index[0] != number1.length && index[1] != number2.length){
      checkwin(index, correct, number1, number2);
    }
    
    for (var n of number1){
      checkBonus(correct, n, bonus);
    }

    return correct;
  }
}

function checkNum(n){
  if (isNaN(n)){
    throw new Error("[ERROR] 로또 번호는 숫자만 가능합니다");
  }
}

function checkNumLotto(n){
  if(n<1 || n>45){
    throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
}

function checkArr(checkArray,n){
  if (checkArray.includes(n)) {
    throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
  }
  checkArray.push(n);
}

function checkBonus(correct, n, bonus){
  if (n==bonus){
    correct[1]++;
  }
}
function checkwin(index, correct, number1, number2){
  if (number1[index[0]] == number2[index[1]]){
    correct[0]++;
    index[0]++;
    index[1]++;
  }
  else if (number1[index[0]]>number2[index[1]]){
    index[1]++;
  }
  else{
    index[0]++;
  }
}

module.exports = Lotto;
