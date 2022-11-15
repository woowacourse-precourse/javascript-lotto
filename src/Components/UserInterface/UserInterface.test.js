const UserInterface = require('./UserInterface.js');
const { mockQuestions } = require('../../testFunction');

describe('UserInterface 클래스 테스트', () => {
  test('연속적인 입력을 받는다.', () => {
    const callback = jest.fn();
    const quetionCallbackPairs = [
      ['question1', callback],
      ['question2', callback],
      ['question3', callback],
    ];
    const answers = ['1', '2', '3'];
    mockQuestions(answers);
    new UserInterface().chainInput(quetionCallbackPairs);
    answers.forEach((answer, index) => expect(callback).toHaveBeenNthCalledWith(index + 1, answer));
  });
});
