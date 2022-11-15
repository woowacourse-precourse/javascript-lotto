const {Console} = require("@woowacourse/mission-utils");
const Messages = require("./Messages");

class View{
  constructor(task){
    this.task = task;
    this.messages = new Messages();
  }
  inputPaid(){
    Console.print(this.messages.pay_amount());
    Console.readLine('', (input)=>{
      this.task.controllPaid(input);
    })
  }
  printNumberOfLotto(number_of_lotto){
    Console.print(this.messages.number_of_lotto(number_of_lotto));
  }
  printPublished(published){
    published.forEach( (numbers) => {
      Console.print(this.messages.numbers(numbers));
    })
  }
  inputWin(){
    Console.print(this.messages.input_win());
    Console.readLine('',(input)=>{
      this.task.controllWin(input);
    })
  }
  inputBonus(){
    Console.print(this.messages.input_bonus());
    Console.readLine('',(input)=>{
      this.task.controllBonus(input);
    })
  }
  printRank(ranks){
    Console.print(this.messages.result_title());
    ranks.forEach((rank,idx)=>{
      Console.print(this.messages.ranks(rank, idx))
    })
  }
  printProfit(profit){
    Console.print(this.messages.profit(profit));
  }
}

module.exports = View;