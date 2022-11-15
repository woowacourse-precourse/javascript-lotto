const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;

class HitLottoNumber {
  constructor() {
    this.hitLottoNumber = [];
  }

  static inputHitLottoNumber() {
    let hitLottoNumber = [];
    Console.readLine(INPUT_HIT_NUMBER_MESSAGE, input => {
      // 정답 로또 번호에 대한 예외처리
      hitLottoNumber = input.split(',').map(Number);
      this.hitLottoNumber = input.split(',');
      Console.close();
    });

    return hitLottoNumber;
  }
}
