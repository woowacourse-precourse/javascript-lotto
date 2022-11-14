const {DEFAULTS, ERRORLINE} = require('./Constants');

const onlyNmbr = /^[0-9]+$/;
const lotteryRange = /^[1-9]{1}$|^[1-4]{1}[0-5]{1}$|^45$/;

class ExceptionCheck{
  purchaseMoneyErrorCheck(input){
    if (!(onlyNmbr).test(input)){
      throw new Error(ERRORLINE.BUY_CHECK);
    }
    if (parseInt(input) % DEFAULTS.PURCHASE_UNIT !== 0){
      throw new Error(ERRORLINE.INPUT_UNIT_CHECK);
    }
    if (parseInt(input) === 0){
      throw new Error(ERRORLINE.INPUT_UNIT_CHECK);
    }
  }

  noSeperatorErrorCheck(answerSplit){
    if (answerSplit.length === 1){
      throw new Error(ERRORLINE.SEPARATOR_CHECK);
    }
    if (answerSplit.length !== DEFAULTS.CAN_CNT_RANGE){
      throw new Error(ERRORLINE.INPUT_CNT_CHECK);
    }
  }

  answerNumCheck(answerSplit){
    if (new Set(answerSplit).size !== DEFAULTS.CAN_CNT_RANGE){
      throw new Error(ERRORLINE.DUPLICATE_CHECK);
    }
    answerSplit.map((value) => {
      if(!(lotteryRange).test(value)){
        throw new Error(ERRORLINE.NUMRANGE_CHECK);
      }
    })
  }

  bonusNumCheck(bonusNum, answerSplit){
    if (!(onlyNmbr).test(parseInt(bonusNum))){
      throw new Error(ERRORLINE.BONUS_CHECK);
    }
    if(!(lotteryRange).test(parseInt(bonusNum))){
      throw new Error(ERRORLINE.NUMRANGE_CHECK);
    }
    if(answerSplit.includes(bonusNum)){
      throw new Error(ERRORLINE.DUPLICATE_CHECK);
    }
  }

}

const errorCheck = new ExceptionCheck();
module.exports = errorCheck;