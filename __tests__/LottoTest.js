const Lotto = require('../src/Lotto');
const MESSAGE = require('../src/constants/lottoMessage');

describe('Lotto 클래스 당첨 번호 입력 예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(MESSAGE.ERROR.invalidLength);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(MESSAGE.ERROR.duplicateDigit);
  });

  test('로또 번호가 1이상 45이하가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 45, 46, 3, 1]);
    }).toThrow(MESSAGE.ERROR.invalidDigit);
  });
  // 아래에 추가 테스트 작성 가능
});

describe('Lotto 클래스 당첨 통계 출력 테스트', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 6],
    [[1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 5],
    [[1, 2, 3, 4, 8, 7], [1, 2, 3, 4, 5, 6], 4],
    [[1, 2, 3, 9, 8, 7], [1, 2, 3, 4, 5, 6], 3],
  ])(
    '당첨 번호와 로또 번호가 일치하는 숫자의 갯수를 출력한다.',
    (randomLotto, winningLotto, correctCount) => {
      const lotto = new Lotto(randomLotto);
      expect(lotto.countMatchDigit(winningLotto)).toEqual(correctCount);
    },
  );
});
