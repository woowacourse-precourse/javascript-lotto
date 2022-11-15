const Lotto = require('../src/Lotto');
const buyingValidate = require('../src/buyingValidate');
const bonusValidate = require('../src/bonusValidate');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이라면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('콤마 사이에 번호를 입력 안 할 시 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, ' ', 6]);
    }).toThrow('[ERROR]');
  });
  test('문자를 입력할 시 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 6, 'a']);
    }).toThrow('[ERROR]');
  });
});

describe('입력값 예외처리 테스트', () => {
  test('입력값에 공백이 포함되어 있으면 에러 문구를 출력한다.', () => {
    const inputList = [' ', '1 000', ' 1000', '5000 '];
    inputList.forEach((input) => {
      expect(() => buyingValidate(input)).toThrow('[ERROR]');
    });
  });

  test('숫자 이외의 문자가 들어가면 에러 문구를 출력한다.', () => {
    const inputList = ['a', '1000a', 'a1000', '500a00'];
    inputList.forEach((input) => {
      expect(() => buyingValidate(input)).toThrow('[ERROR]');
    });
  });

  test('구입 금액이 1000원 단위로 나누어 떨어지지 않으면 에러 문구를 출력한다.', () => {
    const inputList = ['100', '1', '1300', '15384'];
    inputList.forEach((input) => {
      expect(() => buyingValidate(input)).toThrow('[ERROR]');
    });
  });

  test('구입 금액이 0원이면 에러 문구를 출력한다.', () => {
    const input = '0';
    expect(() => {
      buyingValidate(input);
    }).toThrow('[ERROR]');
  });
});

describe('보너스 번호 예외처리 테스트', () => {
  const winningNumbers = ['1', '2', '3', '4', '5', '6'];
  test('보너스 번호에 문자를 입력하면 에러 문구를 출력한다.', () => {
    const inputList = ['a', '1a', 'a1'];
    inputList.forEach((input) => {
      expect(() => bonusValidate(winningNumbers, input)).toThrow('[ERROR]');
    });
  });
  test('보너스 번호가 1~45 사이의 값이 아닐 경우 에러 문구를 출력한다.', () => {
    const inputList = ['0', '-1', '46', '100'];
    inputList.forEach((input) => {
      expect(() => bonusValidate(winningNumbers, input)).toThrow('[ERROR]');
    });
  });
  test('보너스 번호가 당첨 번호에 포함되면 에러 문구를 출력한다.', () => {
    const inputList = ['1', '2', '3', '4', '5', '6'];
    inputList.forEach((input) => {
      expect(() => bonusValidate(winningNumbers, input)).toThrow('[ERROR]');
    });
  });
  test('보너스 번호에 공백을 입력할 시 에러 문구를 출력한다.', () => {
    const inputList = [' ', '3 ', '10 ', ' 9'];
    inputList.forEach((input) => {
      expect(() => bonusValidate(winningNumbers, input)).toThrow('[ERROR]');
    });
  });
});
