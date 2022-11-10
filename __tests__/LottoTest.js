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

  test('1-45 범위 밖 숫자가 있다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('NaN이 있다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, NaN]);
    }).toThrow('[ERROR]');
  });
});
