const {DEFAULTS, ERRORLINE} = require('./Constants');

class ExceptionCheck{
  purchaseMoneyErrorCheck(input){
    if (!(/^[0-9]+$/).test(input)){
      throw new Error(ERRORLINE.BUY_CHECK);
    }
    if (parseInt(input) % DEFAULTS.PURCHASE_UNIT !== 0){
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
      if(!(/^[1-9]{1}$|^[1-4]{1}[0-5]{1}$|^45$/).test(value)){
        throw new Error(ERRORLINE.NUMRANGE_CHECK);
      }
    })
  }

  bonusNumCheck(bonusNum, answerSplit){
    if (!(/^[0-9]+$/).test(parseInt(bonusNum))){
      throw new Error(ERRORLINE.BONUS_CHECK);
    }
    if(!(/^[1-9]{1}$|^[1-4]{1}[0-5]{1}$|^45$/).test(parseInt(bonusNum))){
      throw new Error(ERRORLINE.NUMRANGE_CHECK);
    }
    if(answerSplit.includes(bonusNum)){
      throw new Error(ERRORLINE.DUPLICATE_CHECK);
    }
  }

}


module.exports = ExceptionCheck;