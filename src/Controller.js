
const MissionUtils = require('@woowacourse/mission-utils');
const {CONSOLELINE, RESULTLINE} = require('./utils/Constants');
const ExceptionCheck = require('./utils/ExceptionCheck');
const Lotto = require("./Lotto");
const randomNum = require('./model/Random');

class Controller{
  constructor(){
    this.errorCheck = new ExceptionCheck();
    this.lottos = [];
    this.lottoGame;
    this.input = 0;
  }

  startGame(){
    this.inputForMoney();
  }

  inputForMoney(){
    MissionUtils.Console.readLine(CONSOLELINE.PURCHASE_MONEY_INPUT+'\n', (input) => {
      this.errorCheck.purchaseMoneyErrorCheck(input);
      this.input = input;
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
      const baselotto = randomNum();
      this.lottos.push(baselotto);
      const printBaselotto = String(baselotto).replace(/,/gi, ', ');
      MissionUtils.Console.print(`[${printBaselotto}]`);
      i++;
    }
    this.inputForAnswerNum();
  }

  inputForAnswerNum(){
    MissionUtils.Console.readLine(CONSOLELINE.ANSWERNUM_INPUT+'\n', (answerStr) => {
      const answerSplit = answerStr.split(',');
      this.inputForAnswerNumCheck(answerSplit);
      this.inputForBonusNum(answerSplit);
    });
  }

  inputForAnswerNumCheck(answerSplit){
    this.errorCheck.noSeperatorErrorCheck(answerSplit);
    this.lottoGame = new Lotto(answerSplit);
  }

  inputForBonusNum(answerSplit){
    MissionUtils.Console.readLine(CONSOLELINE.BONUSNUM_INPUT+'\n', (bonusNum) => {
      this.errorCheck.bonusNumCheck(bonusNum, answerSplit);
      this.showResultStatistic(answerSplit, bonusNum);
    });
  }

  showResultStatistic(answerSplit, bonusNum){
    this.lottoGame.printOfResultFromCalc(this.lottos, answerSplit, bonusNum, this.input);
  }
}

module.exports = Controller;