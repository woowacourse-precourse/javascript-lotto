const MissionUtils = require('@woowacourse/mission-utils');
const Manager = require('../src/Manager');

const mockQuestion = (answer) => {
  MissionUtils.Console.readLine = jest
    .fn()
    .mockImplementationOnce((question, callback) => {
      callback(answer);
    });
};

describe('매니저 클래스 테스트', () => {
  test('보너스 번호에 1에서 45 사이 이외의 숫자가 있으면 예외가 발생한다.', () => {
    mockQuestion('47');
    expect(() => {
      new Manager().getBonusNumber();
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 하나가 아니면 예외가 발생한다.', () => {
    mockQuestion('45,46');
    expect(() => {
      new Manager().getBonusNumber();
    }).toThrow('[ERROR]');
  });
});
