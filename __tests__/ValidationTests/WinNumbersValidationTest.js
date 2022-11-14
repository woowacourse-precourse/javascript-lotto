const WinNumbersValidation = require('../../src/Validation/WinNumbersValidation');

describe('로또 당첨번호 입력값 유효성 검사 테스트 ', () => {
  test('아무것도 입력하지 않으면 예외가 발생한다. (1)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation('');
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });
  test('아무것도 입력하지 않으면 예외가 발생한다. (2)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation(null);
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });
  test('아무것도 입력하지 않으면 예외가 발생한다. (3)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation(undefined);
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 입력값이 없습니다.');
  });

  test('쉼표로 구분된 6자리 입력값이 아니라면 예외가 발생한다. (1)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation('1|2|3|4|5|6');
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 구분은 쉼표(,)를 사용해주세요.');
  });
  test('쉼표로 구분된 6자리 입력값이 아니라면 예외가 발생한다. (2)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation('1,2,3,,4,5,6');
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 구분은 쉼표(,)를 사용해주세요.');
  });
  test('쉼표로 구분된 6자리 입력값이 아니라면 예외가 발생한다. (3)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation('12,4,5,6');
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 구분은 쉼표(,)를 사용해주세요.');
  });

  test('1부터 45까지의 숫자가 아니라면 예외가 발생한다. (1)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation('0,1,2,3,4,5');
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 1부터 45 중 6개의 숫자를 입력해주세요.');
  });
  test('1부터 45까지의 숫자가 아니라면 예외가 발생한다. (2)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation('41,42,43,44,45,46');
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 1부터 45 중 6개의 숫자를 입력해주세요.');
  });

  test('중복된 숫자가 입력된다면 예외가 발생한다. (1)', () => {
    expect(() => {
      const winNumbersValidation = new WinNumbersValidation('1,1,2,3,4,5');
      winNumbersValidation.validate();
    }).toThrow('[ERROR] 중복되는 숫자는 입력할 수 없습니다.');
  });
});
