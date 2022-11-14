const Lotto = require("./Lotto");

class App {
  play() {
  //로또 구매 금액 입력받기
  const amount = this.get_amount();

  //로또 구매하기
  const lotteries = this.buy_lotteries(amount);

  //로또 프린트하기
  for (var i =0;i<lotteries.length;i++)
    lotteries[i].print_numbers();
  
  //당첨 번호 입력받기
  const winning_numbers = this.get_winning_numbers();

  //보너스 번호 입력받기
  const bonus_number = this.get_bonus_number();



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
    MissionUtils.Console.print('구입금액을 입력해 주세요.');
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (answer) => {
    amount = answer;
    this.check_number_errors(amount);
    if (this.not_thousands(amount)) {throw new Error('[ERROR]not_thousands')};
  })

    MissionUtils.Console.print(amount);
    return amount;
  }

  check_number_errors(amount){
    if (this.not_positive(amount)) {throw new Error('[ERROR]not a positive number')};
    if (this.not_natural(amount)) throw new Error('[ERROR]not a natural number');
  }

  //1000단위가 아닐 경우 예외처리
  not_thousands(amount){
    if ((amount % 1000)!= 0) return true;
  }

  not_positive(amount){
    if(amount<=0) return true;
  }

  not_natural(number){
    if (number%1 != 0) return true; 
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


  get_winning_numbers(){
    const MissionUtils = require("@woowacourse/mission-utils");
    var numbers = [];
    var winning_lottery;
    MissionUtils.Console.print('당첨 번호를 입력해 주세요.');
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
    //번호는 쉼표를 기준으로 구분
    numbers = answer.split(',');
    this.check_numbers_errors(numbers);
    winning_lottery = new Lotto(numbers);
  })
    winning_lottery.print_numbers();
    return winning_lottery;
  }

  check_numbers_errors(numbers){
    if (numbers.length != 6) throw new Error('[ERROR]winning_lottery_numbers length error');
    for(var i=0;i<6;i++){
      this.check_number_errors(numbers[i]);
    }
  }

  get_bonus_number(){
    const MissionUtils = require("@woowacourse/mission-utils");
    var number;
    MissionUtils.Console.print('보너스 번호를 입력해 주세요.');
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (answer) => {
    //번호는 쉼표를 기준으로 구분
    this.check_number_errors(answer);
    this.rangecheck(answer);
    number = answer;
  })
  MissionUtils.Console.print(number);
  return number;
  }
  
  rangecheck(number){
    if (number<1 || number>45)
        throw new Error('[ERROR]range error');
  }

}

module.exports = App;
