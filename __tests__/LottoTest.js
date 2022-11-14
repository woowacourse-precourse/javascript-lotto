const Lotto = require('../src/Lotto');
const LottoSet = require('../src/LottoSet');
const Bonus = require('../src/Bonus');

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

  // 당청 번호 입력 예외 처리
  test('1~45 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 1~45 사이 숫자여야 합니다.');
  });

  test('숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['a', 'ㄱ', '!', 'z', 'Z', '@']);
    }).toThrow('[ERROR] 숫자여야 합니다.');
  });
});
