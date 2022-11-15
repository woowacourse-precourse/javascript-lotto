const CheckLottery = require('../src/Utils/CheckLottery');
const Consumer = require('../src/Components/Consumer');
const Lotto = require('../src/Components/Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('CheckLottery 테스트', () => {
  test('당첨된 등수를 관리하는 winList와 당첨 금액의 총합인 total을 검증', () => {
    //조건
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ]);
    const testMainNumber = [1, 2, 3, 4, 5, 6];
    const testBonusNumber = '7';
    const CorrectWinList = [1, 1, 0, 0, 0, 0];
    const CorrectTotal = 2030000000;

    // 실행
    const testConsumer = new Consumer(2000);
    const testLotto = new Lotto(testMainNumber, testBonusNumber);
    const [expectWinList, expectTotal] = CheckLottery.checkWinLottery(testConsumer, testLotto);

    // 평가
    expect(expectWinList).toEqual(CorrectWinList);
    expect(expectTotal).toBe(CorrectTotal);
  });
});
