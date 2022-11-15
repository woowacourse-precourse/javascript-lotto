const Lotto = require('../src/Lotto');
const LottoNumberGenerator = require('../src/LottoGenerator');

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

  // 아래에 추가 테스트 작성 가능

  test('로또 번호에 1에서 45 사이 이외의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 34, 56, 21, 95, 42]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 겹칠 경우 예외가 발생한다.', () => {
    expect(() => {
      const playerNumber = new LottoNumberGenerator(1000).createLotto();
      new Lotto([1, 2, 3, 4, 5, 6]).result(playerNumber, 4);
    }).toThrow('[ERROR]');
  });
});
