
const MissionUtils = require('@woowacourse/mission-utils');
const {DEFAULTS, CONSOLELINE, RESULTLINE} = require('./utils/Constants');
const errorCheck = require('./utils/ExceptionCheck');
const Lotto = require("./Lotto");
const randomNum = require('./model/Random');
const { printAutoLottos } = require('./utils/Print');


class Controller{
  constructor(){
    this.lottos = [];
    this.lottoGame;
    this.input = 0;
  }

  startGame(){
    this.inputForMoney();
  }

  inputForMoney(){
    MissionUtils.Console.readLine(CONSOLELINE.PURCHASE_MONEY_INPUT+'\n', (input) => {
      errorCheck.purchaseMoneyErrorCheck(input);
      this.input = input;
      const purchaseCnt = this.input/DEFAULTS.PURCHASE_UNIT;
      MissionUtils.Console.print(RESULTLINE.PURCHASE_CHECK(purchaseCnt));
      this.getAutoLottos(purchaseCnt);
    });
  }

  getAutoLottos(purchaseCnt){
    const nonDuplicateLottery = new Set();
    while (nonDuplicateLottery.size < purchaseCnt){
      const baselotto = randomNum();
      nonDuplicateLottery.add(baselotto);
      printAutoLottos(baselotto);
    }
    this.lottos = [...nonDuplicateLottery];
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
    errorCheck.noSeperatorErrorCheck(answerSplit);
    this.lottoGame = new Lotto(answerSplit);
  }

  inputForBonusNum(answerSplit){
    MissionUtils.Console.readLine(CONSOLELINE.BONUSNUM_INPUT+'\n', (bonusNum) => {
      errorCheck.bonusNumCheck(bonusNum, answerSplit);
      this.showResultStatistic(answerSplit, bonusNum);
    });
  }

  showResultStatistic(answerSplit, bonusNum){
    this.lottoGame.printOfResultFromCalc(this.lottos, answerSplit, bonusNum, this.input);
  }
}

module.exports = Controller;