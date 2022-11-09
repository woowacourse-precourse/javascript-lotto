/* eslint-disable max-lines-per-function */
const App = require('../src/App');
const Lotto = require('../src/Lotto');

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
});

const removeDuplicatedNumbers = (numbers) => new Set(numbers);

describe('로또 번호 생성 테스트', () => {
  const { getNumbers } = new App();

  test('6개의 번호가 있다. ', () => {
    const numbers = getNumbers();

    expect(numbers).toHaveLength(6);
  });

  test('중복된 수가 존재하지 않는다.', () => {
    const numbers = getNumbers();
    const result = removeDuplicatedNumbers(numbers);

    expect(result.size).toEqual(numbers.length);
  });

  test('1~45범위의 수 이어야 한다.', () => {
    const numbers = getNumbers();

    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
      expect(typeof number).toEqual('number');
    });
  });
});
