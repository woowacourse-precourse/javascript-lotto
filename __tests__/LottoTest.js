const Lotto = require('../src/model/Lotto');

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

  // 아래에 추가 테스트 작성 가능
  test('로또 숫자들의 범위가 1이상 45이하가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 60]);
    }).toThrow('[ERROR]');
  });

  test('입력이 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '헐']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호를 오름차순으로 저장한다', () => {
    const lotto = new Lotto([5, 6, 4, 3, 1, 2]);
    const result = lotto.numbers;

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
