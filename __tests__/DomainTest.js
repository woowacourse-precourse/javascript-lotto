const MissionUtils = require("@woowacourse/mission-utils");
const App = require('../src/App');
const User = require('../src/User');
const Calculator = require('../src/Calculator');
const Lotto = require('../src/Lotto');

describe('1. 사용자의 구입 금액 입력', () => {
  test('사용자가 구입 금액을 입력한다.', () => {
    const user = new User('3000');
    const amount = user.amount;

    expect(amount).toBe(3000);
  });

  test('비정상적인 값이 들어가면 예외가 발생한다.', () => {
    
    const amount = ['2300', '2x00'];

    for(let a of amount) {
      const user = new User(a);

      expect(() => user.amountException())
      .toThrow("[ERROR]");
    }
  });
});

describe('2. 구입 금액 만큼의 로또 발행', () => {
  test('하나의 로또가 정상적으로 발행된다.', () => {
    const random = [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 37, 24, 26, 7],
      [2, 17, 33, 23, 34, 44]
    ];

    for(let r of random) {
      const lotto = new Lotto(r);
      const result = lotto.numbers;

      expect(result).toStrictEqual(r);
    }
  });

  test('비정상적인 값이 들어가면 예외가 발생한다.', () => {
    const random = [
      [1, ' ', 3, 4, 5, 6],
      [4, 5, 88, 24, 26, 7],
      [2, 17, 43, 'x', 34, 44]
    ];

    for(let r of random) {
      expect(() => new Lotto(r))
      .toThrow("[ERROR]");
    }
  });

  test('사용자가 6000원을 입력하면 6개의 로또가 발행된다.', () => {
    const app = new App();
    app.createUser('6000');
    app.generateLotto();
    
    expect(app.totalLotto.length).toBe(6);
  });

});

describe('4. 당첨 내역 계산', () => {
  test('전체 로또의 점수를 저장한다.', () => {
    const calc = new Calculator();
    calc.totalLotto = [
      [1, 42, 23, 4, 5, 36],
      [2, 23, 4, 5, 6, 7],
      [3, 4, 25, 26, 37, 8,]
    ];
    calc.winningNumber = [1, 2, 3, 4, 5, 6];
    calc.bonusNumber = 3;
    calc.calculateRank();

    const result = {
      'three': 1,
      'four': 1,
      'five': 0,
      'five_ball': 0,
      'six': 0
    }
    expect(calc.totalScore).toStrictEqual(result);
  })

  test('전체 로또의 점수를 저장한다.(보너스 점수 처리)', () => {
    const calc = new Calculator();
    calc.totalLotto = [
      [1, 42, 23, 4, 5, 36],
      [3, 23, 4, 5, 6, 7],
      [1, 5, 25, 26, 37, 8]
    ];
    calc.winningNumber = [1, 42, 23, 4, 5, 6];
    calc.bonusNumber = 42;
    calc.calculateRank();

    const result = {
      'three': 0,
      'four': 1,
      'five': 0,
      'five_ball': 1,
      'six': 0
    }
    expect(calc.totalScore).toStrictEqual(result);
  })

  test('전체 점수에 따른 수익률을 계산한다.', () => {
    const calc = new Calculator();
    calc.totalLotto = [
      [1, 42, 23, 4, 5, 36],
      [3, 23, 4, 5, 6, 7],
      [1, 5, 25, 26, 37, 8]
    ];
    calc.winningNumber = [1, 42, 23, 4, 5, 6];
    calc.bonusNumber = 42;
    calc.calculateRank();
    calc.calcYield();

    expect(calc.yield).toBe(30050000);
  })
});