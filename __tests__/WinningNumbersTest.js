const { mockQuestions } = require('./ApplicationTest');
const App = require('../src/App');

describe('입력받은 당첨 번호가 6자리인지 확인하는 테스트', () => {
  test('사용자가 입력한 당첨 번호가 6자리가 아니라면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '1,2,3,4,5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
});
