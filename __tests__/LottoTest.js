const Lotto = require("../src/Lotto");
const checkError = require('../src/controller/CheckError')
const lotteryTicket = require('../src/controller/LotteryTicket')
const inputDataObject = require('../src/model/InputDataObject')

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test('당첨 번호에 숫자 이외의 타입이 있는 경우', () => {
    expect(() => {
      new Lotto([1, 2, 'a', 4, 'c', 5]);
    }).toThrow("[ERROR]");
  })

  test('당첨 번호가 입력 범위를 초과한 경우1', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow("[ERROR]");
  })

  test('당첨 번호가 입력 범위를 초과한 경우2', () => {
    expect(() => {
      new Lotto([0, 2, 100, 4, 5, 55]);
    }).toThrow("[ERROR]");
  })

  test('보너스 번호의 입력 범위를 초과한 경우1', () => {
    expect(() => {
      checkError.isUnique(123)
    }).toThrow("[ERROR]");
  })

  test('보너스 번호의 입력 범위를 초과한 경우2', () => {
    expect(() => {
      checkError.isUnique('12 3')
    }).toThrow("[ERROR]");
  })

  test('보너스 번호에 숫자 이외의 타입이 있는 경우', () => {
    expect(() => {
      new Lotto('a');
    }).toThrow("[ERROR]");
  })
});

describe('구입 금액 1,000원 단위 확인 테스트', () => {
  test('구입 금액이 1,000원으로 나누어 떨어진다.', () => {
    expect(checkError.isDivideZero(14000)).toEqual(true)
  })
  
  test('구입 금액이 1,000원으로 나누어 떨어지지 않는다.', () => {
    expect(() => {
      checkError.isDivideZero(14500)
    }).toThrow('[ERROR]')
  })

  test('구입 금액 타입이 숫자가 아닌 경우', () => {
    expect(() => {
      checkError.isDivideZero('aabb1')
    }).toThrow('[ERROR]')
  })
})

describe('로또 발급 테스트', () => {
  test('발급된 로또 개수 확인', () => {
    const countMoney = lotteryTicket.countOfLottery(8)
    const result = inputDataObject.raffle.length

    expect(countMoney[0]).toEqual(result)
  })
})

describe('발행한 로또와 당첨 번호 및 보너스 번호 테스트', () => {
  test('발행한 로또 중 맞은 개수가 3개 이상인 경우', () => {
    const lotto = new Lotto([1,2,3,4,5,6])
    inputDataObject.raffle = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]
    inputDataObject.raffleNumbers = [1, 3, 5, 14, 21, 11]
    lotto.compareLotto()

    expect(inputDataObject.correctNumber.length).toEqual(2)
  })
})