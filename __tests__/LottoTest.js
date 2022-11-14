const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1-45 범위 밖 숫자가 있다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1-45 범위 밖 숫자라면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.setBonusNumber(46);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호에 포함되어 있다면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.setBonusNumber(6);
    }).toThrow('[ERROR]');
  });
});
