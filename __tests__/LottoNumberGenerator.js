const MissionUtils = require('@woowacourse/mission-utils');
const LottoNumberGenerator = require('../src/LottoNumberGenerator');

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

});
