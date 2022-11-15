const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const User = require('../src/User');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('예외 테스트', () => {
  test('구입금액[숫자]', () => {
    expect(() => {
      const user = new User();
      user.buyLottos('ab');
    }).toThrow('[ERROR] 구입금액은 숫자여야 합니다.');
  });

  test('구입금액[1000단위]', () => {
    expect(() => {
      const user = new User();
      user.buyLottos(250);
    }).toThrow('[ERROR] 구입금액은 1000단위여야 합니다.');
  });

  test('구입금액[0]', () => {
    expect(() => {
      const user = new User();
      user.buyLottos(0);
    }).toThrow('[ERROR] 구입금액은 0이상 이여야 합니다.');
  });

  test('당첨번호[길이]', () => {
    mockQuestions(['1000', '1,2,3,4,5,6,7']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('보너스번호[중복]', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', '5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
  });
});
