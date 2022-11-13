const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');

afterAll(() => Console.close());

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1미만 45초과의 숫자가 있으면 예외가 발생한다.', () => {
    const lottos = [
      [0, 1, 2, 3, 4, 5],
      [46, 1, 2, 3, 4, 5],
    ];

    lottos.forEach((lotto) => {
      expect(() => {
        new Lotto(lotto);
      }).toThrow('[ERROR]');
    });
  });
});
