
const MissionUtils = require('@woowacourse/mission-utils');
const {CONSOLELINE, RESULTLINE} = require('./utils/Constants');
const ExceptionCheck = require('./utils/ExceptionCheck');
const Lotto = require("./Lotto");
const randomNum = require('./model/Random');
const { printAutoLottos } = require('./utils/Print');

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

  printPurchaseNums(purchaseCnt){
    MissionUtils.Console.print(RESULTLINE.PURCHASE_CHECK(purchaseCnt));
    this.getAutoLottos(purchaseCnt);
  }

  getAutoLottos(purchaseCnt){
    const duplicateCaseCheck = new Set();
    while (duplicateCaseCheck.size < purchaseCnt){
      const baselotto = randomNum();
      duplicateCaseCheck.add(baselotto);
      printAutoLottos(baselotto);
    }
    this.lottos = [...duplicateCaseCheck];
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