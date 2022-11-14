const Lotto = require('../src/Lotto');
const { LOTTO_LENGTH, ERR_MSG, RANKS } = require('../src/constants');

describe('셀프 로또 테스트', () => {
  test('로또 구입 금액 예외 테스트', () => {
    const lottoList = [];
    const TEST_LEN = 100;
    for (let i = 0; i < TEST_LEN; i += 1) {
      lottoList.push(Lotto.makeLotto());
    }
    lottoList.forEach(lotto => {
      expect(lotto.length).toEqual(LOTTO_LENGTH);
      expect(lotto.length).toEqual([...new Set(lotto)].length);
    });
    expect(lottoList.length).toEqual(TEST_LEN);
  });

  test('로또 당첨 번호 예외 테스트', () => {
    const winningNumbers = [
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 'a', 'b', 1, 3],
      [1, 1, 1, 1, 1, 1, 1],
      ['', '', '', '', '', '']
    ];

    winningNumbers.forEach(numbers => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow('[ERROR]');
    });
  });

  test('로또 보너스 번호 예외 테스트', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.setBonusNumber('aka');
    }).toThrow(ERR_MSG.invalidLottoNumberRange);

    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.setBonusNumber(1);
    }).toThrow(ERR_MSG.duplicatedNumber);
  });

  describe('로또 당첨 로직', () => {
    let lotto;

    beforeEach(() => {
      lotto = new Lotto([8, 21, 23, 41, 42, 43]);
      lotto.setBonusNumber(7);
    });

    test('1등', () => {
      expect(lotto.getResult([[8, 21, 23, 41, 42, 43]])[RANKS.FIRST]).toEqual(
        1
      );
    });
    test('2등', () => {
      expect(lotto.getResult([[8, 21, 23, 41, 42, 7]])[RANKS.SECOND]).toEqual(
        1
      );
    });
    test('3등', () => {
      expect(lotto.getResult([[8, 1, 23, 41, 42, 43]])[RANKS.THIRD]).toEqual(1);
    });
    test('4등', () => {
      expect(lotto.getResult([[1, 2, 23, 41, 42, 43]])[RANKS.FOURTH]).toEqual(
        1
      );
    });
    test('5등', () => {
      expect(lotto.getResult([[1, 2, 3, 41, 42, 43]])[RANKS.FIFTH]).toEqual(1);
    });
  });

  test('수익률 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(
      lotto.getYield(
        { FIFTH: 1, FOURTH: 0, THIRD: 0, SECOND: 0, FIRST: 0 },
        5000
      )
    ).toEqual('100.0');

    expect(
      lotto.getYield(
        { FIFTH: 1, FOURTH: 1, THIRD: 0, SECOND: 0, FIRST: 0 },
        45000
      )
    ).toEqual('122.2');

    expect(
      lotto.getYield(
        { FIFTH: 1, FOURTH: 1, THIRD: 1, SECOND: 0, FIRST: 0 },
        4000
      )
    ).toEqual('38875.0');

    expect(
      lotto.getYield(
        { FIFTH: 1, FOURTH: 0, THIRD: 1, SECOND: 1, FIRST: 0 },
        300000
      )
    ).toEqual('10501.7');

    expect(
      lotto.getYield(
        { FIFTH: 0, FOURTH: 0, THIRD: 0, SECOND: 0, FIRST: 1 },
        1000
      )
    ).toEqual('200000000.0');
  });
});
