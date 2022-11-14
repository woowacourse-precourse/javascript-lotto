const User = require('../src/User');

describe('수익률 수치 테스트', () => {
  test('수익률은 소수점 둘째 자리에서 반올림한다.', () => {
		let user = new User(15000);
		user.profit = 30000;
    expect(user.getRateOfReturn()).toBe('200.0%');
  });

  test('수익률은 소수점 둘째 자리에서 반올림한다.2', () => {
		let user = new User(15000);
		user.profit = 150000;
    expect(user.getRateOfReturn()).toBe('1000.0%');
  });

	test('수익률은 소수점 둘째 자리에서 반올림한다.3', () => {
		let user = new User(14000);
		user.profit = 30000;
    expect(user.getRateOfReturn()).toBe('214.3%');
  });

	test('수익률 계산 테스트', () => {
		let user = new User(1500000);
		user.profit = 0;
    expect(user.getRateOfReturn()).toBe('0.0%');
  });

	test('수익률 계산 테스트2', () => {
		let user = new User(9000);
		user.profit = 1500000;
    expect(user.getRateOfReturn()).toBe('16666.7%');
  });

	test('수익률 계산 테스트3', () => {
		let user = new User(38000);
		user.profit = 5000;
    expect(user.getRateOfReturn()).toBe('13.2%');
  });
});

describe('구입 금액 입력 테스트', () => {
  test('구입 금액은 1,000원 단위여야 한다.', () => {
    expect(() => {
			new User(1100);    
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 1,000원 단위여야 한다.2', () => {
    expect(() => {
      new User(1001);
    }).toThrow('[ERROR]');
  });

  test('적어도 로또 하나를 살 수 있는 돈은 있어야 한다.', () => {
    expect(() => {
      new User(0);
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 숫자여야 한다.', () => {
    expect(() => {
      new User('100a');
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 음수일 수 없다.', () => {
    expect(() => {
      new User(-5000);
    }).toThrow('[ERROR]');
  });

  test('구입 금액은 숫자여야 한다.2', () => {
    expect(() => {
      new User('10O00');
    }).toThrow('[ERROR]');
  });

  test('유효한 큰 숫자 테스트', () => {
    let user = new User(1000000000);
    expect(user.getSeedMoney().toString()).toBe('1000000000');
  });

  test('유효한 큰 숫자 테스트2', () => {
    let user = new User(99999999000);
    expect(user.getSeedMoney().toString()).toBe('99999999000');
  });
});
