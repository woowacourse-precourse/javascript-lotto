const App = require('../src/App')
const MissionUtils = require('@woowacourse/mission-utils')
const { LOTTO_PRICE, validationError } = require('../src/constants/app.js')
const { prize } = require('../src/constants/lotto.js')
const { WINNING_NUMBER_COUNT } = require('../src/constants/common.js')

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn()
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input)
    })
  }, MissionUtils.Console.readLine)
}

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn()
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number)
  }, MissionUtils.Random.pickUniqueNumbersInRange)
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print')
  logSpy.mockClear()
  return logSpy
}

describe('App 클래스 구입 금액 유효성 테스트', () => {
  const app = new App()

  test('구입 금액이 올바른 숫자 형식이 아니라면 예외가 발생한다.', () => {
    mockQuestions(['1000j'])

    expect(() => {
      app.play()
    }).toThrow(validationError.TYPE)
  })

  test(`구입 금액이 ${LOTTO_PRICE} 단위가 아니라면 예외가 발생한다.`, () => {
    mockQuestions(['1002'])

    expect(() => {
      app.play()
    }).toThrow(validationError.UNIT)
  })
})

describe('App 클래스 메서드 테스트', () => {
  const app = new App()

  test(`${LOTTO_PRICE * 3}을 입력하면 3개의 로또를 구매해야 한다.`, () => {
    expect(app.buyLotto(3)).toHaveLength(3)
  })

  test(`구입한 로또의 모든 숫자는 겹치지 않아야 한다.`, () => {
    const lottosOwnedByUser = app
      .buyLotto(3)
      .map((lotto) => Array.from(new Set(lotto)))

    expect(lottosOwnedByUser[0]).toHaveLength(WINNING_NUMBER_COUNT)
    expect(lottosOwnedByUser[1]).toHaveLength(WINNING_NUMBER_COUNT)
    expect(lottosOwnedByUser[2]).toHaveLength(WINNING_NUMBER_COUNT)
  })

  test(`구입한 로또 번호는 오름차순이어야 한다.`, () => {
    const lottoOwnedByUser = app.buyLotto(1).flat()
    const isIncreasing = lottoOwnedByUser.every(
      (number, index) => index === 0 || number > lottoOwnedByUser[index - 1]
    )

    expect(isIncreasing).toBe(true)
  })

  test(`당첨 통계는 ${Object.keys(
    prize
  )}를 key, number를 value로 가지는 객체이다.`, () => {
    app.lottosOwnedByUser = [[1, 2, 3, 4, 5, 6]]
    const lottoResult = app.getLottoResult({
      wins: [1, 2, 3, 4, 5, 6],
      bonus: 7,
    })

    expect(lottoResult).toHaveProperty(`${prize.FIRST}`)
    expect(lottoResult).toHaveProperty(`${prize.SECOND}`)
    expect(lottoResult).toHaveProperty(`${prize.THIRD}`)
    expect(lottoResult).toHaveProperty(`${prize.FOURTH}`)
    expect(lottoResult).toHaveProperty(`${prize.FIFTH}`)

    expect(typeof lottoResult[prize.FIRST]).toBe('number')
    expect(typeof lottoResult[prize.SECOND]).toBe('number')
    expect(typeof lottoResult[prize.THIRD]).toBe('number')
    expect(typeof lottoResult[prize.FOURTH]).toBe('number')
    expect(typeof lottoResult[prize.FIFTH]).toBe('number')
  })

  test('1등 2개, 2등 2개, 4등 1개를 반환해야 한다.', () => {
    app.lottosOwnedByUser = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 10, 11],
      [10, 11, 12, 13, 14, 15],
    ]
    const lottoResult = app.getLottoResult({
      wins: [1, 2, 3, 4, 5, 6],
      bonus: 7,
    })

    expect(lottoResult).toHaveProperty(`${prize.FIRST}`, 2)
    expect(lottoResult).toHaveProperty(`${prize.SECOND}`, 2)
    expect(lottoResult).toHaveProperty(`${prize.THIRD}`, 0)
    expect(lottoResult).toHaveProperty(`${prize.FOURTH}`, 1)
    expect(lottoResult).toHaveProperty(`${prize.FIFTH}`, 0)
  })

  test('수익률은 소수점 둘째 자리에서 반올림해야 한다.', () => {
    app.purchaseAmount = 9000000
    const returnRate = app.calculateReturnRate({
      [prize.FIRST]: 0,
      [prize.SECOND]: 0,
      [prize.THIRD]: 0,
      [prize.FOURTH]: 1,
      [prize.FIFTH]: 0,
    })

    expect(returnRate).toBe(0.6)
  })
})

describe('App 클래스 기능 테스트', () => {
  test('logs대로 출력이 진행되어 5등 1개만 당첨되어야 한다.', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ])
    mockQuestions(['8000', '1,2,3,4,5,6', '7'])

    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ]
    const logSpy = getLogSpy()

    const app = new App()
    app.play()

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
    })
  })
})
