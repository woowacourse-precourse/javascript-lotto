const MissionUtils = require("@woowacourse/mission-utils");

class App {

  getErrorMessage(errorCase){
    const ERROR_MESSAGE = '[ERROR] ';
    let NEW_ERROR = '';
    if(errorCase == 'unitError') {
        NEW_ERROR = ERROR_MESSAGE +  '1000원 단위로 입력해 주세요.';
    }
    return NEW_ERROR;
  }
  getLottoMoney() {  
    //let lottoAmount;
    MissionUtils.Console.print('구입금액을 입력해 주세요.');   
    MissionUtils.Console.readLine('', (answer) => {
      console.log(`구입금액: ${answer}`);
      if(parseInt(answer) % 1000 != 0){      
        MissionUtils.Console.print(this.getErrorMessage('unitError'));
        throw '1000원 단위로 입력되지 않음';  
      } 
      console.log('로또 수량은...',answer/1000)

      //const lottoAmount = parseInt(answer) / 1000;

    });
    
  }

  getLottoAmount(money) {
    
  }
  
  play() {
    this.money = this.getLottoMoney();
    this.amount = this.getLottoAmount(this.money);
    //MissionUtils.Console.close();

  }
}

const app = new App();
app.play();

module.exports = App;
