const {Console} = require("@woowacourse/mission-utils");

class Messages{
  pay_amount(){
    return "구입금액을 입력해 주세요."
  }
  number_of_lotto(number){
    return `\n${number}개를 구매했습니다.`
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
}

module.exports = View;