const { describe, expect, test } = require('@jest/globals');
const Lotto = require('../src/Lotto');

describe('로또 클래스 생성 테스트', () => {
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

  test.each([
    [['j', 1, 2, 3, 4, 5]],
    [[1, 2, 3, '4j', 5, 6]],
    [['a', 'b', 'c', 'd', 'e', 'f']],
  ])(
    '로또 번호에 숫자가 아닌 문자열이 있으면 예외가 발생한다. new Lotto(%p)',
    (numbers) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow('[ERROR]');
    }
  );

  test.each([
    [[1, 2, 3, 55, 6, 7]],
    [[0, 42, 21, 11, 4, 9]],
    [[1, 2, 9, 12, -3, 32]],
  ])(
    '로또 번호가 1~45사이의 숫자가 아니라면 예외가 발생한다. new Lotto(%p)',
    (numbers) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow('[ERROR]');
    }
  );
});

describe('로또 클래스의 getRank 함수 테스트', () => {
  test.each([
    [[42, 12, 11, 2, 9, 23], [42, 12, 11, 2, 9, 23], 1],
    [[18, 31, 36, 2, 40, 12], [2, 12, 18, 31, 36, 40], 9],
    [[19, 5, 8, 6, 7, 12], [5, 8, 6, 7, 12, 19], 45],
  ])(
    '로또 번호가 6개가 일치하면 1을 반환한다. 나의번호: %p, getRank(%p, %d) => 1',
    (numbers, winningNumbers, bonusNumber) => {
      const lotto = new Lotto(numbers);

      expect(lotto.getRank(winningNumbers, bonusNumber)).toEqual(1);
    }
  );

  test.each([
    [[42, 12, 1, 2, 9, 23], [42, 12, 11, 2, 9, 23], 1],
    [[18, 9, 36, 2, 40, 12], [2, 12, 18, 31, 36, 40], 9],
    [[45, 5, 8, 6, 7, 12], [5, 8, 6, 7, 12, 19], 45],
  ])(
    '로또 번호가 5개가 일치하고 다른 하나가 보너스 번호라면 2를 반환한다. 나의번호: %p, getRank(%p, %d) => 2',
    (numbers, winningNumbers, bonusNumber) => {
      const lotto = new Lotto(numbers);

      expect(lotto.getRank(winningNumbers, bonusNumber)).toEqual(2);
    }
  );

  test.each([
    [[42, 12, 11, 2, 9, 23], [42, 12, 45, 2, 9, 23], 1],
    [[18, 31, 36, 2, 40, 12], [2, 12, 18, 31, 36, 30], 9],
    [[19, 5, 8, 6, 7, 12], [5, 8, 6, 7, 12, 1], 45],
  ])(
    '로또 번호가 5개가 일치하면 3을 반환한다. 나의번호: %p, getRank(%p, %d) => 3',
    (numbers, winningNumbers, bonusNumber) => {
      const lotto = new Lotto(numbers);

      expect(lotto.getRank(winningNumbers, bonusNumber)).toEqual(3);
    }
  );

  test.each([
    [[42, 12, 11, 2, 9, 23], [4, 12, 45, 2, 9, 23], 1],
    [[18, 31, 36, 2, 40, 12], [2, 23, 18, 31, 36, 30], 9],
    [[19, 5, 8, 6, 7, 12], [5, 8, 6, 39, 12, 1], 45],
  ])(
    '로또 번호가 4개가 일치하면 4을 반환한다. 나의번호: %p, getRank(%p, %d) => 4',
    (numbers, winningNumbers, bonusNumber) => {
      const lotto = new Lotto(numbers);

      expect(lotto.getRank(winningNumbers, bonusNumber)).toEqual(4);
    }
  );

  test.each([
    [[42, 12, 11, 2, 9, 20], [4, 12, 45, 2, 9, 23], 1],
    [[18, 31, 36, 42, 40, 12], [2, 23, 18, 31, 36, 30], 9],
    [[19, 5, 8, 36, 7, 12], [5, 8, 6, 39, 12, 1], 45],
  ])(
    '로또 번호가 3개가 일치하면 5을 반환한다. 나의번호: %p, getRank(%p, %d) => 5',
    (numbers, winningNumbers, bonusNumber) => {
      const lotto = new Lotto(numbers);

      expect(lotto.getRank(winningNumbers, bonusNumber)).toEqual(5);
    }
  );

  test.each([
    [[42, 45, 11, 2, 39, 20], [4, 12, 45, 2, 9, 23], 1, 6],
    [[1, 31, 3, 42, 40, 12], [2, 23, 18, 31, 36, 30], 9, 7],
    [[19, 15, 28, 36, 7, 9], [5, 8, 6, 39, 12, 1], 45, 8],
  ])(
    '로또 번호가 일치하지 않거나 2개 이하로 6또는 7, 8을 반환한다. 나의번호: %p, getRank(%p, %d) => %d',
    (numbers, winningNumbers, bonusNumber, rank) => {
      const lotto = new Lotto(numbers);

      expect(lotto.getRank(winningNumbers, bonusNumber)).toEqual(rank);
    }
  );

  test.each([
    [[2, 4, 14, 21, 27, 33], [2, 4, 14, 21, 27, 33], 5, 1],
    [[6, 10, 11, 20, 23, 43], [6, 10, 11, 20, 23, 40], 43, 2],
    [[1, 2, 19, 28, 34, 40], [1, 2, 19, 27, 34, 40], 3, 3],
    [[3, 14, 25, 30, 40, 45], [3, 14, 24, 30, 40, 44], 34, 4],
    [[5, 6, 12, 17, 20, 26], [5, 6, 12, 19, 21, 32], 35, 5],
    [[1, 2, 19, 32, 38, 39], [1, 3, 19, 33, 37, 40], 2, 6],
  ])(
    '나의 번호: %p, getRank(%p, %d) => %d',
    (numbers, winningNumbers, bonuseNumber, result) => {
      const lotto = new Lotto(numbers);

      expect(lotto.getRank(winningNumbers, bonuseNumber)).toEqual(result);
    }
  );
});
