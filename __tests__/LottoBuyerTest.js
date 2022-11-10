const MissionUtils = require('@woowacourse/mission-utils');
const LottoBuyer = require('../src/LottoBuyer');

describe('로또 구매자 클래스 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('구매 금액이 1,000원 단위가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new LottoBuyer('1001');
    }).toThrow('[ERROR]');
  });
});
