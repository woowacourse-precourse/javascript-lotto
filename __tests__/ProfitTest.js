const User = require('../src/User');
const Lotto = require('../src/User');

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
