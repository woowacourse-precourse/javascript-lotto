
const MissionUtils = require('@woowacourse/mission-utils');
const {DEFAULTS, MONEY, CONSOLELINE, RESULTLINE} = require('./utils/Constants');
const ExceptionCheck = require('./utils/ExceptionCheck');
const Lotto = require("./Lotto");
const randomNum = require('./model/Random');

class Controller{
  constructor(){
    this.errorCheck = new ExceptionCheck();
    this.lottos = [];
    this.lottoGame;
  }

  startGame(){
    this.inputForMoney();
  }

  inputForMoney(){
    MissionUtils.Console.readLine(CONSOLELINE.PURCHASE_MONEY_INPUT+'\n', (input) => {
      this.errorCheck.purchaseMoneyErrorCheck(input);
      this.printPurchaseNums(input/1000);
    });
  }

  printPurchaseNums(lotto_cnt){
    MissionUtils.Console.print(RESULTLINE.PURCHASE_CHECK(lotto_cnt));
    this.printLottos(lotto_cnt);
  }

  printLottos(lotto_cnt){
    let i = 0;
    while(i < lotto_cnt){
      this.lottos.push(randomNum());
      MissionUtils.Console.print(randomNum());
      i++;
    }
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
    this.lottoGame = new Lotto(answerSplit);
  }


}

module.exports = Controller;

const c = new Controller();
c.startGame();