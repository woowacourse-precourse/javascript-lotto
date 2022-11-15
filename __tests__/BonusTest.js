/* eslint-disable no-undef */
/* eslint-disable no-new */
const Bonus = require('../src/Bonus');

describe('보너스 클래스 테스트', () => {
  const mockLottoNumbers = [1, 2, 3, 4, 5, 6];

  // test('보너스 번호의 개수가 1개가 아니라면 예외가 발생한다.', () => {
  //   expect(() => {
  //     new Bonus('1 2', mockLottoNumbers);
  //   }).toThrow('[ERROR] 보너스 번호는 1개여야 합니다.');
  // });

  test('보너스 번호를 입력하지 않는다면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('', mockLottoNumbers);
    }).toThrow('[ERROR] 보너스 번호는 반드시 1개는 있어야 합니다.');
  });

  test('숫자가 아닌 다른 문자가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('나는김재민', mockLottoNumbers);
    }).toThrow('[ERROR] 숫자를 입력하여 주십시오.');
  });

  test('로또 번호 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('46', mockLottoNumbers);
    }).toThrow('[ERROR] 1~45 사이 숫자를 입력하여 주십시오.');
  });

  test('로또 번호와 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('1', mockLottoNumbers);
    }).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
  });
  // 아래에 추가 테스트 작성 가능
});
