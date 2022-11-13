const MissionUtils = require("@woowacourse/mission-utils");
const {Console} = MissionUtils;

const Lotto = require("./Lotto.js");
const LottoTicket = require("./LottoTicket.js");
const BonusNumber = require("./BonusNumber.js");
const Money = require("./Money.js");

class App {
  lottocount;
  lottotickets;
  input_money;
  input_lotto;
  input_bonus;
  results;

  play(){
    this.inputMoney();
  }

  inputMoney(){
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.input_money = new Money(input);

      Console.print("");
      this.countLotto();
      this.publishLotto();
      this.printLotto();
      
      Console.print("");
      this.inputWinNumber();
    });
  }

  inputWinNumber(){
    Console.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
      input = input.split(",");
      this.input_lotto = new Lotto(input);
      
      Console.print("");
      this.inputBonusNumber();
    });  
  }

  inputBonusNumber(){
    Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      this.input_lotto = new BonusNumber(input, this.input_lotto.getNumbers());
      this.input_bonus = input;
    });
  }


  countLotto(){
    const money = this.input_money.getMoney();
    if(!(money % 1000 === 0))
      throw new Error("[ERROR] 1,000원 단위로 입력해 주세요.");
    this.lottocount = money / 1000;
  }

  publishLotto(){
    this.lottotickets = new Array();
    for(let i=0; i < this.lottocount; i++)
      this.lottotickets.push(new LottoTicket());
  }

  printLotto(){
    Console.print("");
    Console.print(this.lottocount + "개를 구매했습니다.");

    for(let i=0; i < this.lottocount; i++){
      let lottoticket = this.lottotickets[i];
      Console.print(lottoticket.getNumbers());
    }
    Console.print("");
  }

  // printWin(){
  //   Console.print("");
  //   Console.print("당첨 통계");
  //   Console.print("---");

  //   Console.print("3개 일치 (5,000원) - ");
  //   Console.print("4개 일치 (50,000원) - ");
  //   Console.print("5개 일치 (1,500,000원) - ");
  //   Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - ");
  //   Console.print("6개 일치 (2,000,000,000원) - ");
  // }

  calResults(){
    this.results = [0,0,0,0,0];
    
    const bonusnumber = this.input_bonus.getNumber();
    const numbers =this.input_lotto.getNumbers();

    for(const ticket of this.lottotickets){
      const mynumbers = ticket.getNumbers();
      this.calResult_Each(mynumbers, numbers, bonusnumber);
    }
  }

  calResult_Each(mynumbers, numbers, bonusnumber){
    const count = this.countMatch(ticket, numbers);
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

  countMatch(mynumbers, numbers){
    let count = 0;
    for(const mynumber of mynumbers){
      if(numbers.includes(mynumber))
        count++;
    }
    return count;
  }
}



const app = new App();
app.play();

module.exports = App;
