const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('구입한 로또 수량과 발행한 로또 수량이 일치하는지 테스트', () => {
    const count = 20;
    const issuedLottos = Lotto.issue(count);

    expect(issuedLottos).toHaveLength(count);
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개보다 적으면 예외가 발생한다.', () => {
    expect(() => {
      Lotto.validate([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Lotto.validate([0, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Lotto.validate([1.5, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 자연수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Lotto.validate([-1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1 이상 45 이하의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      Lotto.validate([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 중복되지 않는 1 이상 45 이하의 자연수 6개이면 예외가 발생하지 않는다.', () => {
    expect(() => {
      Lotto.validate([1, 2, 3, 4, 5, 45]);
    }).not.toThrow('[ERROR]');
  });
});

afterAll((done) => {
  Console.close();
  done();
});
