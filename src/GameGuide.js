const { Console } = require('@woowacourse/mission-utils');
const PLEASE_ENTER_TEXT = '을 입력해 주세요.';

// 출력을 담당
class GameGuide {
  makeInputGuideText(title) {
    return `${title}${PLEASE_ENTER_TEXT}`;
  }

  printInputGuideText(title) {
    console.log(this.makeInputGuideText(title));
  }
}

module.exports = GameGuide;
