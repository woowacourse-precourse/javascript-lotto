const MissionUtils = require('@woowacourse/mission-utils');
const LottoNumberGenerator = require('../src/LottoNumberGenerator');
const { ERROR_MESSAGE } = require('../src/constants');
const { makeErrorMsg } = require('../src/utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

describe.only('로또 번호 추첨기 클래스 테스트', () => {
  test('당첨 번호와 보너스 번호를 입력받는다.', () => {
    const answers = ['1,2,3,4,5,6', '7'];

    mockQuestions(answers);

    const lottoNumberGenerator = new LottoNumberGenerator();
    lottoNumberGenerator.drawLottery();
    expect(lottoNumberGenerator.getNumbers()).toEqual([
      [1, 2, 3, 4, 5, 6],
      [7],
    ]);
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.NUMBER);
    const answers = ['1,2,3,4,5,k', '7'];

    mockQuestions(answers);

    expect(() => {
      const lottoNumberGenerator = new LottoNumberGenerator();
      lottoNumberGenerator.drawLottery();
    }).toThrow(errorMsg);
  });

  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.WINNER_NUMBER_LENTH);
    const answers = ['1,2,3,4,5,6,7', '7'];

    mockQuestions(answers);

    expect(() => {
      const lottoNumberGenerator = new LottoNumberGenerator();
      lottoNumberGenerator.drawLottery();
    }).toThrow(errorMsg);
  });

  test('보너스 번호의 개수가 1개가 넘어가면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.BONUS_NUMBER_LENTH);
    const answers = ['1,2,3,4,5,6', '7,1'];

    mockQuestions(answers);

    expect(() => {
      const lottoNumberGenerator = new LottoNumberGenerator();
      lottoNumberGenerator.drawLottery();
    }).toThrow(errorMsg);
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.DUPLICATION);
    const answers = ['1,2,3,4,6,6', '7'];

    mockQuestions(answers);

    expect(() => {
      const lottoNumberGenerator = new LottoNumberGenerator();
      lottoNumberGenerator.drawLottery();
    }).toThrow(errorMsg);
  });

  test('당첨 번호의 숫자 범위가 1~45 사이가 아니면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.RANGE);
    const answers = ['0,2,3,4,5,6', '7'];

    mockQuestions(answers);

    expect(() => {
      const lottoNumberGenerator = new LottoNumberGenerator();
      lottoNumberGenerator.drawLottery();
    }).toThrow(errorMsg);
  });

  test('보너스 번호의 숫자 범위가 1~45 사이가 아니면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.RANGE);
    const answers = ['1,2,3,4,5,6', '46'];

    mockQuestions(answers);
    expect(() => {
      const lottoNumberGenerator = new LottoNumberGenerator();
      lottoNumberGenerator.drawLottery();
    }).toThrow(errorMsg);
  });
});
