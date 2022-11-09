
const MissionUtils = require('@woowacourse/mission-utils');
const {DEFAULTS, MONEY, CONSOLELINE, RESULTLINE} = require('./utils/Constants');
const ExceptionCheck = require('./utils/ExceptionCheck');
const Lotto = require("./Lotto");

class Controller{
  constructor(){
    this.errorCheck = new ExceptionCheck();
    this.lotto;
  }

  startGame(){
    this.inputForMoney();
  }

  inputForMoney(){
    MissionUtils.Console.readLine(CONSOLELINE.PURCHASE_MONEY_INPUT+'\n', (input) => {
      this.errorCheck.purchaseMoneyErrorCheck(input);
      this.printPurchaseNums(input);
    });
  }

  printPurchaseNums(input){
    MissionUtils.Console.close();
  }

  inputForAnswerNum(){
    MissionUtils.Console.readLine(CONSOLELINE.ANSWERNUM_INPUT+'\n', (answerStr) => {
      this.inputForAnswerNumCheck(answerStr);
      this.inputForBonusNum();
    });
  }

  inputForAnswerNumCheck(answerStr){
    const answerSplit = answerStr.split(',');
    this.errorCheck.noSeperatorErrorCheck(answerSplit);
    this.lotto = new Lotto(answerSplit);
  }


}

module.exports = Controller;

const c = new Controller();
c.inputForAnswerNum();