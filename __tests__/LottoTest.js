const Lotto = require('../src/Lotto');
const { ERROR } = require('../src/utiles/Constant');

beforeEach(() => {
  const lotto = new Lotto();
});

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    const lotto = new Lotto();

    expect(() => {
      lotto.setWinningNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(`${ERROR.PREFIX} ${ERROR.COUNT}`);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const lotto = new Lotto();

    expect(() => {
      lotto.setWinningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow(`${ERROR.PREFIX} ${ERROR.DUPLICATION}`);
  });

  test('로또 번호에 숫자 외의 요소가 있으면 예외가 발생한다.', () => {
    const lotto = new Lotto();

    expect(() => {
      lotto.setWinningNumbers([1, 2, 3, 4, 5, 'a']);
    }).toThrow(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
  });

  test('로또 번호의 범위가 주어진 범위를 벗어난다면 예외가 발생한다.', () => {
    const lotto = new Lotto();

    expect(() => {
      lotto.setWinningNumbers([1, 2, 3, 4, 5, 46]);
    }).toThrow(`${ERROR.PREFIX} ${ERROR.RANGE}`);
  });

  test('보너스 번호가 잘 입력되는지 확인', () => {
    const lotto = new Lotto();

    const numbers = [1, 2, 3, 4, 5, 6];
    lotto.setWinningNumbers(numbers);
    lotto.addBonusNumber(7);

    expect(lotto.getLottoNumbers()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('보너스 번호가 기존의 정답 번호에 있으면 예외 발생', () => {
    const lotto = new Lotto();

    const numbers = [1, 2, 3, 4, 5, 6];
    lotto.setWinningNumbers(numbers);

    expect(() => lotto.addBonusNumber(6)).toThrow(
      `${ERROR.PREFIX} ${ERROR.DUPLICATION_BONUS}`
    );
  });

  test('로또 번호가 당첨 번호와 몇 개 일치하는지 확인', () => {
    const lotto = new Lotto();

    lotto.setWinningNumbers([1, 2, 3, 4, 5, 6]);
    lotto.addBonusNumber(7);

    expect(lotto.getMatchCount([1, 2, 3, 4, 8, 10])).toEqual(4);
  });
});
