const MissionUtils = require('@woowacourse/mission-utils');
const LottoDrawer = require('../src/LottoDrawer');
const WinnerSelector = require('../src/WinnerSelector');
const { WINNER_RULE, PRICE, NUMBER_COUNT } = require('../src/lottoOptions');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((question, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

const lottoDrawer = new LottoDrawer(NUMBER_COUNT, new WinnerSelector(PRICE, WINNER_RULE));

describe('LottoDrawer 클래스 테스트', () => {
  test('당첨 번호 입력 테스트', () => {
    lottoDrawer.setWinnerNumber('1,2,3,4,5,6');

    expect(lottoDrawer.result).toMatchObject({
      numbers: [1, 2, 3, 4, 5, 6],
    });
  });

  test('보너스 번호 입력 테스트', () => {
    mockQuestions(['11']);

    lottoDrawer.setPurchasedLottos([]);
    lottoDrawer.setBonusNumber();
    expect(lottoDrawer.result).toEqual(expect.objectContaining({
      bonus: 11,
    }));
  });
});
