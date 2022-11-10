const App = require('../src/App');
const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // createToken(): 정수값을 받으면 해당 수만큼의 토큰을 리턴함
  test('입력된 숫자만큼 토큰을 리턴하지 않으면 예외가 발생한다.', () => {
    const input = 3;
    const app = new App();

    expect(app.createToken(input).length).toBe(input);
  });

  // buyLotto(): 정수값을 받으면 해당 수만큼의 Lotto 객체를 배열로 리턴함
  test('buyLotto 함수가 리턴하는 배열 요소가 Lotto 타입인지 검사', () => {
    const input = 3;
    const app = new App();

    app.buyLotto(input).forEach((lotto) => expect(lotto).toBeInstanceOf(Lotto));
  });

  test('buyLotto 함수가 리턴하는 배열 길이가 로또 구매 갯수와 일치하는지 검사', () => {
    const input = 3;
    const app = new App();

    expect(app.buyLotto(input)).toHaveLength(input);
  });
});
