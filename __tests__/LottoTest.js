const Lotto = require('../src/Lotto');
const message = require('../src/Message');
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

  test('로또 번호는 오름차순으로 정렬된다.', () => {
    expect(() => {
      const lotto = new Lotto([10, 1, 45, 2, 3, 4]);
      lotto.order_lotto().toBe([1, 2, 3, 4, 10, 45]);
    });
  });
});
