const {Console} = require("@woowacourse/mission-utils");

class Messages{
  pay_amount(){
    return "구입금액을 입력해 주세요."
  }
  number_of_lotto(number){
    return `\n${number}개를 구매했습니다.`
  }
  input_win(){
    return '\n당첨 번호를 입력해 주세요.'
  }
  input_bonus(){
    return '\n보너스 번호를 입력해 주세요.'
  }
  result_title(){
    return '\n당첨 통계\n---'
  }
  ranks(rank, index){
    const ranks = ["3개 일치 (5,000원) - ",
                   "4개 일치 (50,000원) - ",
                   "5개 일치 (1,500,000원) - ",
                   "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
                   "6개 일치 (2,000,000,000원) - "];
    return `${ranks[index]}${rank.length}개`
  }
}

class View{
  constructor(task){
    this.task = task;
    this.messages = new Messages();
  }
  inputPaid(){
    Console.print(this.messages.pay_amount());
    Console.readLine('', (input)=>{
      this.task.controll(input);
    })
  }
  printNumberOfLotto(number_of_lotto){
    Console.print(this.messages.number_of_lotto(number_of_lotto));
  }
  printPublished(published){
    published.forEach( (numbers) => {
      Console.print(numbers);
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
}

module.exports = View;