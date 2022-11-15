const MissionUtils = require("@woowacourse/mission-utils");
const {Console} = MissionUtils;

const Lotto = require("./Lotto.js");
const LottoTicket = require("./LottoTicket.js");
const BonusNumber = require("./BonusNumber.js");
const Money = require("./Money.js");

const {MESSAGE, RESULT_MESSAGE, ERROR} = require("./Constants.js");

class App {
  lottocount;
  lottotickets;
  input_money;
  input_lotto;
  input_bonus;
  results;
  revenue;

  play(){
    this.inputMoney();
  }

  inputMoney(){
    Console.readLine(MESSAGE.PUT_MONEY, (input) => {
      this.input_money = new Money(input);

      Console.print("");
      this.countLotto();
      this.publishLotto();
      this.printLotto();
      
      this.inputWinNumber();
    });
  }

  inputWinNumber(){
    Console.readLine(MESSAGE.PUT_WIN_NUMBER, (input) => {
      input = input.split(",");
      this.input_lotto = new Lotto(input);
      
      Console.print("");
      this.inputBonusNumber();
    });  
  }

  inputBonusNumber(){
    Console.readLine(MESSAGE.PUT_BONUS_NUMBER, (input) => {
      this.input_bonus = new BonusNumber(input, this.input_lotto.getNumbers());

      this.calResults();
      this.printWin();
      this.calRevenue();
      this.printRevenue();

      Console.close();
    });
  }

  printLotto(){
    Console.print(this.lottocount + MESSAGE.LOTTO_COUNT);

    for(let i=0; i < this.lottocount; i++){
      let lottoticket = this.lottotickets[i];
      const str = this.arrToStr(lottoticket.getNumbers());
      Console.print(str);
    }
    Console.print("");
  }

  arrToStr(arr){
    let str = "[" + arr[0];
    for(let i =1; i<arr.length; i++){
      str = str + ", " + arr[i];
    }
    str = str + "]"
    return str;
  }

  printWin(){
    Console.print("");
    Console.print(MESSAGE.WIN_STATISTICS);
    
    Console.print(RESULT_MESSAGE.FIFTH + this.results[0] + "개");
    Console.print(RESULT_MESSAGE.FOURTH + this.results[1] + "개");
    Console.print(RESULT_MESSAGE.THIRD + this.results[2] + "개");
    Console.print(RESULT_MESSAGE.SECOND + this.results[3] + "개");
    Console.print(RESULT_MESSAGE.FIRST + this.results[4] + "개");
  }

  printRevenue(){
    Console.print("총 수익률은 " + this.revenue + "%입니다.");
  }

  countLotto(){
    const money = this.input_money.getMoney();
    if(!(money % 1000 === 0))
      throw new Error(ERROR.MONEY_ERROR);
    this.lottocount = money / 1000;
  }

  publishLotto(){
    this.lottotickets = new Array();
    for(let i=0; i < this.lottocount; i++)
      this.lottotickets.push(new LottoTicket());
  }

  calResults(){
    this.results = [0,0,0,0,0];

    const bonusnumber = this.input_bonus.getNumber();
    const winnumbers =this.input_lotto.getNumbers();

    for(const ticket of this.lottotickets){
      const mynumbers = ticket.getNumbers();
      this.calResult_Each(mynumbers, winnumbers, bonusnumber);      
    }
  }

  calResult_Each(mynumbers, winnumbers, bonusnumber){
    const count = this.countMatch(mynumbers, winnumbers);
    if(count == 3)
      this.results[0]++;
    if(count == 4)
      this.results[1]++;
    if(count == 5)
      if(!mynumbers.includes(bonusnumber))
        this.results[2]++;
      else
        this.results[3]++;
    if(count == 6)
      this.results[4]++;
  }

  countMatch(mynumbers, winnumbers){
    let count = 0;
    for(const mynumber of mynumbers){
      if(winnumbers.includes(mynumber))
        count++;
    }
    return count;
  }

  calRevenue(){
    let reward = 0;
    reward = reward + 5000 * this.results[0];
    reward = reward + 50000 * this.results[1];
    reward = reward + 1500000 * this.results[2];
    reward = reward + 30000000 * this.results[3];
    reward = reward + 2000000000 * this.results[4];
    
    this.revenue = reward / (this.lottocount * 1000) * 100;
    this.revenue = Math.round(this.revenue * 10) / 10;
    this.revenue = this.revenue.toFixed(1);
  }
}

const app = new App();
app.play();

module.exports = App;
