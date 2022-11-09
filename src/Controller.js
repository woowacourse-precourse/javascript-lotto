
const MissionUtils = require('@woowacourse/mission-utils');
const {DEFAULTS, MONEY, CONSOLELINE, RESULTLINE} = require('./utils/Constants');

class Controller{
  constructor(){

  }

  startGame(){
    this.inputForMoney();
  }

  inputForMoney(){
    MissionUtils.Console.readLine(CONSOLELINE.PURCHASE_MONEY_INPUT+'\n', (input) => {
      this.printPurchaseNums(input);
      
    });
  }

  printPurchaseNums(input){
    MissionUtils.Console.close();
  }

}

module.exports = Controller;