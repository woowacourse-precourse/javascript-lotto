const Lotto = require("./Lotto");

class App {
  play() {
  const amount = this.get_amount(); //로또 구매 금액 입력받기

  const lotteries = this.buy_lotteries(amount); //로또 구매하기 및 출력하기
  
  const winning_numbers = this.get_winning_numbers(); //당첨 번호 입력받기

  const bonus_number = this.get_bonus_number();   //보너스 번호 입력받기

  this.print_winning_history(lotteries, winning_numbers, bonus_number); //당첨내역 계산 및 출력
  }


  buy_lotteries(amount){
    const MissionUtils = require("@woowacourse/mission-utils");
    const n = amount / 1000;
    MissionUtils.Console.print(n.toString() + "개를 구매했습니다.");

    const lotteries = this.make_lotteries(n);
    this.print_lotteries(lotteries);
    return lotteries;
  }

  make_lotteries(n){
    const MissionUtils = require("@woowacourse/mission-utils");
    var lotteries = [];
    for(var i =0;i<n;i++){
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottery = new Lotto(numbers);
      lotteries.push(lottery);
    }
    return lotteries;
  }

  print_lotteries(lotteries){ //로또 출력하기
    for (var i =0;i<lotteries.length;i++) 
      lotteries[i].print_numbers();
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

  print_winning_history(lotteries, winning_numbers, bonus_number){
    const MissionUtils = require("@woowacourse/mission-utils");

    //3개 일치
    const lotteries_three_numbers_identical = this.matching_lottery_count(lotteries, winning_numbers, 3);
    var sentence = "3개 일치 (5,000원) - "+lotteries_three_numbers_identical.toString()+"개"
    MissionUtils.Console.print(sentence);

    //4개 일치
    const lotteries_four_numbers_identical = this.matching_lottery_count(lotteries, winning_numbers, 4);
    sentence = "4개 일치 (50,000원) - "+lotteries_four_numbers_identical.toString()+"개"
    MissionUtils.Console.print(sentence);

    //5개 일치
    const lotteries_five_numbers_identical = this.matching_lottery_count(lotteries, winning_numbers, 5);
    sentence = "5개 일치 (1,500,000원) - "+lotteries_five_numbers_identical.toString()+"개"
    MissionUtils.Console.print(sentence);

    //5개 일치, 보너스 볼 일치
    const lotteries_five_numbers_and_bonus_identical = this.five_and_bonus_matching_lottery_count(lotteries, winning_numbers, bonus_number);
    sentence = "5개 일치, 보너스 볼 일치 (30,000,000원) - "+lotteries_five_numbers_and_bonus_identical.toString()+"개"
    MissionUtils.Console.print(sentence);

    //6개 일치
    const lotteries_six_numbers_identical = this.matching_lottery_count(lotteries, winning_numbers, 6);
    sentence = "6개 일치 (2,000,000,000원) - "+lotteries_six_numbers_identical.toString()+"개"
    MissionUtils.Console.print(sentence);
  }

  matching_lottery_count(lotteries, winning_numbers, k){ //몇개 일치하는지 보여주기
    const MissionUtils = require("@woowacourse/mission-utils");
    var count = 0;
    for (var i =0;i<lotteries.length;i++){
      if (lotteries[i].calculate_match(winning_numbers, k)) count++;
    }
    return count; 
  }

  five_and_bonus_matching_lottery_count(lotteries, winning_numbers, bonus_number){
    const MissionUtils = require("@woowacourse/mission-utils");
    var count =0;
    for (var i =0;i<lotteries.length;i++){
      if ((lotteries[i].calculate_match(winning_numbers, 5)) && (lotteries[i].bonus_match(bonus_number)))
         count++;
    }
    return count;
     
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
