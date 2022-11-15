const { Console, Random } = require('@woowacourse/mission-utils');
const ScoreMachine = require('../src/ScoreMachine');
const VendingMachine = require('../src/VendingMachine');

const mockRandoms = (number) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  Random.pickUniqueNumbersInRange.mockReturnValueOnce(number);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Score Machine 클래스', () => {
  const scoreMachine = new ScoreMachine();

  test('로또 번호와 당첨 번호 간 일치하는 번호의 수를 구한다.', () => {
    scoreMachine.setWinningNumber([1, 2, 3, 4, 5, 6]);
    expect(scoreMachine.getMatchCount([1, 2, 3, 4, 5, 6])).toEqual(6);
  });

  test('로또 번호에 보너스 번호가 포함하는지 여부를 구한다.', () => {
    scoreMachine.setBonusNumber(6);
    expect(scoreMachine.isMatchWithBounusNumber([1, 2, 3, 4, 5, 6])).toEqual(true);
  });

  test('총 당첨 금액을 구매 금액으로 나누어 수익률을 계산한다.', () => {
    const vendingMachine = new VendingMachine();
    const logSpy = getLogSpy();

    mockRandoms([1, 2, 3, 4, 5, 6]);
    vendingMachine.makeLotto('1000');
    scoreMachine.run([1, 2, 3, 10, 11, 12], 7);

    expect(scoreMachine.getTotalPrizeMoney()).toEqual(5000);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('총 수익률은 500.0%입니다.')
    );
  });
});
