const { mockQuestions } = require('./ApplicationTest');
const App = require('../src/App');

describe('사용자의 금액 투입 테스트', () => {
  test('사용자가 입력한 금액이 1000원 단위가 아니라면 에러를 발생시킨다.', () => {
    mockQuestions(['5555']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
});
