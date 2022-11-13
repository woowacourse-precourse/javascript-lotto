const Lotto = require("./Lotto");

class App {
  play() {
  //로또 구매 입력받기
  //당첨 번호 입력받기
  
  const amount = this.get_amount();
  
  }

  get_amount(){
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
    const amount = answer;
    if (this.not_thousands(amount)) {throw 'not_thousands'};
    if (this.not_positive(amount)) {throw 'not a positive number'}
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


}

module.exports = App;
