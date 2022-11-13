const Lotto = require("./Lotto");

class App {
  play() {
  //로또 구매 금액 입력받기
  const amount = this.get_amount();

  //로또 구매하기
  const lotteries = this.buy_lotteries(amount);

  
 

  }

  buy_lotteries(amount){
    const MissionUtils = require("@woowacourse/mission-utils");
    const lotteries = [];

    const n = amount % 1000;
    sentence = n.toString() + "개를 구매했습니다."
    MissionUtils.Console.print(sentence);

    for(var i =0;i<n;i++){
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      var lottery = new Lotto(numbers);
      lotteries.push(lottery);
      MissionUtils.Console.print(numbers);
    }
    
    
  }

  get_amount(){
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
    const amount = answer;
    if (this.not_thousands(amount)) {throw 'not_thousands'};
    if (this.not_positive(amount)) {throw 'not a positive number'}
    return amount;
  })
  }

  //1000단위가 아닐 경우 예외처리
  not_thousands(amount){
    if ((amount % 1000)!= 0) return true;
  }

  not_positive(amount){
    if(amount<=0) return true;
  }


}

module.exports = App;
