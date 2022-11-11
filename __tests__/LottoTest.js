/* eslint-disable no-new */
const MissionUtils = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');

afterAll(() => {
  MissionUtils.Console.close();
});

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('배열이 아니면 예외를 발생한다.', () => {
    expect(() => {
      new Lotto(1, 2, 3, 4, 5, 6);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  describe('로또 발행 메소드 테스트', () => {
    test('메소드 이름은 "createLotto"로 정의된다.', () => {
      const METHOD_NAME = 'createLotto';

      expect(Lotto.createLotto.name).toEqual(METHOD_NAME);
    });

    test('길이가 6인 배열을 반환한다.', () => {
      const LENGTH = 6;

      expect(Lotto.createLotto()).toHaveLength(LENGTH);
    });
  });

  describe('로또 구매 메소드 테스트', () => {
    test('메소드 이름은 "buyLotto"로 정의된다.', () => {
      const METHOD_NAME = 'buyLotto';

      expect(Lotto.buyLotto.name).toEqual(METHOD_NAME);
    });

    test('8000을 전달하면 배열 8개를 반환한다.', () => {
      expect(Lotto.buyLotto('8000')).toHaveLength(8);
    });
  });
});
