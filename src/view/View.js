const {Console} = require("@woowacourse/mission-utils");

class Messages{
  pay_amount(){
    return "구입금액을 입력해 주세요."
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
}

module.exports = View;