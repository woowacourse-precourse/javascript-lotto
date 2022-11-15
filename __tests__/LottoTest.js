const Lotto = require('../src/Lotto')
const { validationError, prize } = require('../src/constants/lotto.js')
const { range, WINNING_NUMBER_COUNT } = require('../src/constants/common.js')

describe('Lotto 클래스 생성자 유효성 테스트', () => {
  test('로또 번호에 숫자 이외의 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto({
        wins: [1, 2, 3, 4, 5, NaN],
        bonus: 6,
      })
    }).toThrow(validationError.TYPE)
  })

  test('보너스 번호에 숫자 이외의 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto({
        wins: [1, 2, 3, 4, 5, 6],
        bonus: NaN,
      })
    }).toThrow(validationError.TYPE)
  })

  test(`로또 번호의 개수가 ${WINNING_NUMBER_COUNT}개를 넘어가면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto({
        wins: Array.from(
          { length: WINNING_NUMBER_COUNT + 1 },
          (_, index) => index + 1
        ),
        bonus: 8,
      })
    }).toThrow(validationError.WINNING_NUMBER_COUNT)
  })

  test(`로또 번호의 개수가 ${WINNING_NUMBER_COUNT}개 보다 적으면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto({
        wins: Array.from(
          { length: WINNING_NUMBER_COUNT - 1 },
          (_, index) => index + 1
        ),
        bonus: 8,
      })
    }).toThrow(validationError.WINNING_NUMBER_COUNT)
  })

  test('로또 번호가 올바른 범위의 정수보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto({
        wins: [1, 2, 3, 4, 5, range.MAX + 1],
        bonus: 6,
      })
    }).toThrow(validationError.RANGE)
  })

  test('로또 번호가 올바른 범위의 정수보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto({
        wins: [1, 2, 3, 4, 5, range.MIN - 1],
        bonus: 6,
      })
    }).toThrow(validationError.RANGE)
  })

  test('보너스 번호에 올바른 범위의 정수보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto({
        wins: [1, 2, 3, 4, 5, 6],
        bonus: range.MAX + 1,
      })
    }).toThrow(validationError.RANGE)
  })

  test('보너스 번호에 올바른 범위의 정수보다 작면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto({
        wins: [1, 2, 3, 4, 5, 6],
        bonus: range.MIN - 1,
      })
    }).toThrow(validationError.RANGE)
  })

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto({
        wins: [1, 2, 3, 4, 5, 5],
        bonus: 6,
      })
    }).toThrow(validationError.DUPLICATION)
  })

  test('로또 번호와 보너스 번호에 중복되는 정수가 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto({
        wins: [1, 2, 3, 4, 5, 6],
        bonus: 6,
      })
    }).toThrow(validationError.DUPLICATION)
  })
})

describe('Lotto 클래스 등수 확인', () => {
  const lotto = new Lotto({
    wins: [1, 2, 3, 4, 5, 6],
    bonus: 7,
  })

  test(`6개가 일치하면 ${prize.FIRST}등이다.`, () => {
    expect(lotto.checkRank([1, 2, 3, 4, 5, 6])).toEqual(prize.FIRST)
  })

  test(`5개가 일치하고, 보너스 볼이 포함되면 ${prize.SECOND}등이다.`, () => {
    expect(lotto.checkRank([1, 2, 3, 4, 5, 7])).toEqual(prize.SECOND)
  })

  test(`5개가 일치하고, 보너스 볼이 포함되지 않으면 ${prize.THIRD}등이다.`, () => {
    expect(lotto.checkRank([1, 2, 3, 4, 5, 8])).toEqual(prize.THIRD)
  })

  test(`4개가 일치하면 ${prize.FOURTH}등이다.`, () => {
    expect(lotto.checkRank([1, 2, 3, 4, 8, 9])).toEqual(prize.FOURTH)
  })

  test(`4개가 일치하고 보너스 볼이 포함되어도 ${prize.FOURTH}등이다.`, () => {
    expect(lotto.checkRank([1, 2, 3, 4, 7, 8])).toEqual(prize.FOURTH)
  })

  test(`3개가 일치하면 ${prize.FIFTH}등이다.`, () => {
    expect(lotto.checkRank([1, 2, 3, 8, 9, 10])).toEqual(prize.FIFTH)
  })

  test(`3개가 일치하고 보너스 볼이 포함되어도 ${prize.FIFTH}등이다.`, () => {
    expect(lotto.checkRank([1, 2, 3, 7, 8, 9])).toEqual(prize.FIFTH)
  })

  test(`2개 이하가 일치한다면 ${prize.NONE}등이다.`, () => {
    expect(lotto.checkRank([7, 8, 9, 10, 11, 12])).toEqual(prize.NONE)
  })
})
