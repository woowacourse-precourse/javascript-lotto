const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
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

  test('로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow('[ERROR]');
  });

  test('배열 안에 쉼표를 기준으로 숫자 출력', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.toString()).toEqual('[1, 2, 3, 4, 5, 6]');
  });

  test('로또 번호와 당첨 번호를 비교해 같은 숫자가 몇 개 인지 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winning = new Lotto([1, 2, 3, 40, 41, 42]);

    expect(lotto.countSameNumber(winning)).toEqual(3);
  });

  test('특정 숫자 포함 여부 확인', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.hasNumber(3)).toEqual(true);
  });
});

afterAll(() => {
  Console.close();
});
