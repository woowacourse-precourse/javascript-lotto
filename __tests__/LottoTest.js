const Lotto = require('../src/Lotto')
const {
  range,
  WINNING_NUMBER_COUNT,
  validationError,
} = require('../src/constants/lotto.js')

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
