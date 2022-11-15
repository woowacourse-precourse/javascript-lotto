/* eslint-disable max-lines-per-function */
/* eslint-disable prettier/prettier */
const Lotto = require('../src/Lotto');
const WinLotto = require('../src/WinLotto');

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

  test('로또 번호에 숫자 이외의 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 'f', 'g', 5]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호 6개와 중복되는 경우 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 11, 12, 5]);
      new WinLotto(2);
    }).toThrow('[ERROR]');
  });
  // 아래에 추가 테스트 작성 가능
});
