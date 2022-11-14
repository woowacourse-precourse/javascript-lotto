const Lotto = require('../src/Lotto');
const { InputError } = require('../src/util');
const Machine = require('../src/Machine');

describe('로또 클래스 테스트', () => {
  
  test('로또 번호에 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(InputError);
  });

  test('로또 번호에 숫자 외 다른 문자를 넣으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'f']);
    }).toThrow(InputError);
  });

  test('로또 번호에 공백을 넣을 시 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(('1,2,3, ,4,5').split(',').map(Number));
    }).toThrow(InputError);
  });

  test('로또 번호에 1 ~ 45 범위에 벗어난 숫자를 적으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 46, 5, 6]);
    }).toThrow(InputError);
  });

  test('보너스 넘버를 입력시 중첩되면 예외가 발생한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.winningNums = '6';
    }).toThrow(InputError);
  });

  test('보너스 넘버가 숫자가 아닐시 예외가 발생한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.winningNums = 'f';
    }).toThrow(InputError);
  });

  test('1~45 사이 숫자가 아닐시 예외가 발생한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      lotto.winningNums = '46';
    }).toThrow(InputError);
  });
});

describe('Machine 클래스 테스트', () => {
  // 아래에 추가 테스트 작성 가능
  test('구매 액수가 1000원 단위가 아닐 경우', () => {
    expect(() => new Machine(2500)).toThrow(InputError);
  });

  test('구매 액수에 0원을 입력했을 경우', () => {
    expect(() => new Machine(0)).toThrow(InputError);
  });
});