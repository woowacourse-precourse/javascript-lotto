const Lotto = require("./Lotto");

class App {
  play() {
  //로또 구매 금액 입력받기
  const amount = this.get_amount();

  //로또 구매하기
  const lotteries = this.buy_lotteries(amount);

  //로또 프린트하기
  for (var i =0;i<lotteries.length;i++)
    //this.print_numbers(lotteries[i].getnumber());
    lotteries[i].print_numbers();
  
  
  }

  buy_lotteries(amount){
    const MissionUtils = require("@woowacourse/mission-utils");
    const n = amount / 1000;
    MissionUtils.Console.print(n.toString() + "개를 구매했습니다.");

    const lotteries = [];
    for(var i =0;i<n;i++){
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottery = new Lotto(numbers);
      lotteries.push(lottery);
      
    }

    return lotteries;
  }

  get_amount(){
    const MissionUtils = require("@woowacourse/mission-utils");
    var amount = 0;
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
    amount = answer;
    if (this.not_thousands(amount)) {throw '[ERROR]not_thousands'};
    if (this.not_positive(amount)) {throw '[ERROR]not a positive number'}
  })
    return amount;
  }

  //1000단위가 아닐 경우 예외처리
  not_thousands(amount){
    if ((amount % 1000)!= 0) return true;
  }

  not_positive(amount){
    if(amount<=0) return true;
  }

  print_numbers(numbers){
    const MissionUtils = require("@woowacourse/mission-utils");
    var sentence = "["
    sentence = sentence + numbers[0].toString();
    for(var i =1;i<6;i++){
      sentence = sentence + ', ' + numbers[i].toString();
    }
    sentence = sentence+ "]"
    MissionUtils.Console.print(sentence);
  }


}

module.exports = App;
