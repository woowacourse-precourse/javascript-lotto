const { ERROR } = require('../src/Error');
const { LOTTO } = require('../src/Setting');
const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test(`로또 번호의 개수가 ${LOTTO.NUMBER_COUNT}개가 넘어가면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(`${ERROR.PREFIX} ${ERROR.NUMBER_COUNT}`);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(`${ERROR.PREFIX} ${ERROR.NUMBER_DUPLICATE}`);
  });

  test(`로또 번호의 숫자 범위가 ${LOTTO.MIN_NUMBER}~${LOTTO.MAX_NUMBER}를 벗어나면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([41, 42, 43, 44, 45, 46]);
    }).toThrow(`${ERROR.PREFIX} ${ERROR.NUMBER_RANGE}`);
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([5, 6, 7, 8, 9, 'a']);
    }).toThrow(`${ERROR.PREFIX} ${ERROR.FORMAT}`);
  });

  test('로또 번호와 당첨 번호를 비교하여 4개의 번호가 일치하면 4등이다.', () => {
    const lotto = new Lotto([3, 4, 5, 6, 7, 8]);
    const winningNumbers = new Set([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    lotto.match(winningNumbers, bonusNumber);
    lotto.setRank();
    expect(lotto.rank).toEqual(4);
  });

  test('로또 번호와 당첨 번호를 비교하여 5개의 번호가 일치하면 3등이다.', () => {
    const lotto = new Lotto([2, 3, 4, 5, 6, 7]);
    const winningNumbers = new Set([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 45;

    lotto.match(winningNumbers, bonusNumber);
    lotto.setRank();
    expect(lotto.rank).toEqual(3);
  });

  test('로또 번호와 당첨 번호를 비교하여 5개의 번호와 보너스 번호가 일치하면 2등이다.', () => {
    const lotto = new Lotto([2, 3, 4, 5, 6, 7]);
    const winningNumbers = new Set([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;

    lotto.match(winningNumbers, bonusNumber);
    lotto.setRank();
    expect(lotto.rank).toEqual(2);
  });
});
