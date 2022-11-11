const { mockQuestions } = require('./ApplicationTest');
const App = require('../src/App');

describe('입력받은 당첨 번호가 유효한지 확인하는 테스트', () => {
  test('사용자가 입력한 당첨 번호가 6자리가 아니라면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '1,2,3,4,5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('사용자가 입력한 당첨 번호가 쉼표로 구분받지 않은 상황이라면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '123456']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('사용자가 입력한 당첨 번호에 숫자가 아닌 문자가 포함되어 있다면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '1,2,3,4,5,6a']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('사용자가 입력한 당첨 번호에 중복된 숫자가 포함되어 있다면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '1,2,3,4,5,5']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('사용자가 입력한 당첨 번호가 로또 숫자의 범위가 아닌 상황이라면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '1,2,3,4,5,46']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
});
