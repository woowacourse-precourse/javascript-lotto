const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = {
  MONEY: '구입금액을 입력해주세요 : ',
  WIN_NUMBERS: '당첨 번호를 입력해 주세요. : ',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요. : ',
};

function input(callback1, callback2, callback3, resultFunc) {
  MissionUtils.Console.readLine(MESSAGE.MONEY, (input) => {
    callback1.call(this, input);
    MissionUtils.Console.readLine(MESSAGE.WIN_NUMBERS, (input) => {
      callback2.call(this, input);
      MissionUtils.Console.readLine(MESSAGE.BONUS_NUMBER, (input) => {
        callback3.call(this, input);
        MissionUtils.Console.close();
        resultFunc.call(this);
      });
    });
  });
}

module.exports = input;
