const { ENTER_PURCHASE_AMOUNT, PLEASE_ENTER_TEXT } = require('./constans');

const title = {
  [ENTER_PURCHASE_AMOUNT]: '구입금액'
};

// 출력을 담당
class GameGuide {
  makeInputGuideText(inputType) {
    return `${title[inputType]}${PLEASE_ENTER_TEXT}`;
  }

  printInputGuideText(inputType) {
    console.log(this.makeInputGuideText(inputType));
  }
}

module.exports = GameGuide;
