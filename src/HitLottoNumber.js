const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
const { INPUT_HIT_NUMBER_MESSAGE, INPUT_BONUS_NUMBER_MESSAGE } = require('./Const');
const Validation = require('./Validation');

class HitLottoNumber {
  constructor() {
    this.hitLottoNumber = [];
  }

  static inputHitLottoNumber() {
    let hitLottoNumber = [];
    Console.readLine(INPUT_HIT_NUMBER_MESSAGE, input => {
      Validation.checkInputHitLottoNumber(input);
      hitLottoNumber = input.split(',').map(Number);
      this.hitLottoNumber = input.split(',');
      Console.close();
    });

    return hitLottoNumber;
  }

  static inputBonusNumber() {
    let bonusNumber = null;
    Console.readLine(INPUT_BONUS_NUMBER_MESSAGE, input => {
      // 보너스 번호 입력에 대한 예외처리
      bonusNumber = Number(input);
      Console.close();
    });

    return bonusNumber;
  }
}

module.exports = HitLottoNumber;
