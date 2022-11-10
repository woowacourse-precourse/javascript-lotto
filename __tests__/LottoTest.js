const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호가 중복되면 안됩니다.');
  });

  test('로또 번호는 배열로 받아야합니다.', () => {
    expect(() => {
      new Lotto(1, 2, 3, 4, 5, 6);
    }).toThrow('[ERROR] 배열이 아닙니다.');
  });

  test('로또 번호', () => {
    const lotto = new Lotto([1, 3, 2, 5, 6, 4]);
    const result = lotto.show();
    expect(result).toContainEqual('1', '2', '3', '4', '5', '6');
  });

  test();
});
