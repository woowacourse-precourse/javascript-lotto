const Lotto = require('../src/Lotto/Lotto');

describe('당첨 번호 유효성 테스트', () => {
  test('당첨 번호의 개수가 6개 미만이면 예외가 발생한다 .', () => {
    let winningNumbers = '1,2,3,4,5';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');

    winningNumbers = ' ';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    let winningNumbers = '1,2,3,4,5,6,7';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    let winningNumbers = '1,2,3,4,5,5';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    let winningNumbers = '1,2,null,4,5,6';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');

    winningNumbers = '1,2,a,4,5,6';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 공백이 포함된 숫자가 들어오면 예외가 발생한다.', () => {
    let winningNumbers = '1,2, ,4,5,6';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');

    winningNumbers = '1,2,,4,5,6';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');

    winningNumbers = '1,2,3 ,4,5,6';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 1부터 45사이의 값이 들어오지 않으면 예외가 발생한다.', () => {
    let winningNumbers = '41,42,43,44,45,46';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');

    winningNumbers = '0,1,2,3,4,5';
    expect(() => {
      new Lotto(winningNumbers);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복하지 않는 1~45 사이의 6자리 숫자가 공백 없이 들어오면 정상적으로 동작한다.', () => {
    let winningNumbers = '1,2,3,43,44,45';
    expect(() => {
      new Lotto(winningNumbers);
    }).not.toThrow();
  });
});
