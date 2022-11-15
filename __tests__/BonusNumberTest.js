const { mockQuestions } = require('./ApplicationTest');
const App = require('../src/App');

describe('입력받은 보너스 번호가 유효한지 확인하는 테스트', () => {
  test('사용자가 입력한 보너스 번호가 숫자가 아니라면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', 'a']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('사용자가 입력한 보너스 번호가 로또 숫자의 범위가 아닌 상황이라면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', '46']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });

  test('사용자가 입력한 보너스 번호가 당첨 번호와 중복된 상황이라면 에러를 발생시킨다.', () => {
    mockQuestions(['1000', '1,2,3,4,5,6', '1']);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow('[ERROR]');
  });
});
