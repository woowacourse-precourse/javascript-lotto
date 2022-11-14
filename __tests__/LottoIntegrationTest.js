const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const LottoPublisher = require('../src/LottoPublisher.js');
const LottoStore = require('../src/LottoStore.js');
const LottoViewer = require('../src/LottoViewer.js');
const Customer = require('../src/Customer.js');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 integration 테스트', () => {
  test('사용자가 구매 금액을 입력하면 해당 매수만큼의 로또를 구매하여 출력한다.', () => {
    mockRandoms([
      [5, 7, 22, 28, 29, 44],
      [1, 5, 6, 19, 22, 31],
      [1, 2, 16, 21, 37, 39],
      [4, 8, 20, 23, 27, 35],
      [15, 18, 19, 20, 27, 45],
      [6, 7, 18, 30, 39, 44],
      [1, 4, 8, 23, 27, 44],
      [1, 7, 22, 24, 32, 44],
      [1, 7, 12, 16, 21, 43],
      [8, 14, 18, 20, 37, 42]
    ]);
    mockQuestions(['10000']);
    const logs = [
      '10개를 구매했습니다.',
      '[5, 7, 22, 28, 29, 44]',
      '[1, 5, 6, 19, 22, 31]',
      '[1, 2, 16, 21, 37, 39]',
      '[4, 8, 20, 23, 27, 35]',
      '[15, 18, 19, 20, 27, 45]',
      '[6, 7, 18, 30, 39, 44]',
      '[1, 4, 8, 23, 27, 44]',
      '[1, 7, 22, 24, 32, 44]',
      '[1, 7, 12, 16, 21, 43]',
      '[8, 14, 18, 20, 37, 42]'
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
