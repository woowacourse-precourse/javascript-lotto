const Lotto = require('../src/Lotto');
const App = require('../src/App');
const Exception = require('../src/Exception');

describe('로또 클래스 예외 테스트', () => {
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

  // 아래에 추가 테스트 작성 가능
  test('로또 번호가 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, '숫자 5', 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자가 아니라면 예외가 발생한다. 2', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, '!', 6]);
    }).toThrow('[ERROR]');
  });

  test("로또 번호가 ',' 로 구분되어 있지 않다면 예외가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.numbertoArray('1/2!3,4>?5$???6');
      new Lotto(app.winningArray);
    }).toThrow('[ERROR]');
  });

  test("로또 번호에 ',' 만 있다면 예외가 발생한다.", () => {
    expect(() => {
      const app = new App();
      app.numbertoArray(' , , , , , ');
      new Lotto(app.winningArray);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호에 중복되면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.bonusExecption(parseInt(1));
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.bonusExecption('로또');
    }).toThrow('[ERROR]');
  });
});

describe('로또 클래스 당첨 테스트', () => {
  test('6개 일치 테스트 => winningCount = 6 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 3, 4, 5, 6] });
    expect(lotto.winningCount).toEqual(6);
  });

  test('5개 일치 테스트 => winningCount = 5 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 3, 4, 5, 7] });
    expect(lotto.winningCount).toEqual(5);
  });

  test('4개 일치 테스트 => winningCount = 4 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 3, 4, 7, 12] });
    expect(lotto.winningCount).toEqual(4);
  });

  test('3개 일치 테스트 => winningCount = 3 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 3, 7, 12, 33] });
    expect(lotto.winningCount).toEqual(3);
  });

  test('2개 일치 테스트 => winningCount = 2 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 2, 7, 9, 12, 33] });
    expect(lotto.winningCount).toEqual(2);
  });

  test('1개 일치 테스트 => winningCount = 1 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [1, 7, 9, 12, 28, 33] });
    expect(lotto.winningCount).toEqual(1);
  });

  test('0개 일치 테스트 => winningCount = 0 ', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.compare({ 0: [7, 9, 12, 28, 33, 42] });
    expect(lotto.winningCount).toEqual(0);
  });

  test('등수별 당첨 용지 개수 테스트 => (first, second, third, fourth, fifth)Count', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.bonusNumber = parseInt(10);
    lotto.compare({
      0: [1, 2, 3, 4, 5, 6],
      1: [1, 2, 3, 4, 5, 10],
      2: [1, 2, 3, 4, 6, 10],
      3: [1, 2, 3, 4, 5, 42],
      4: [1, 2, 3, 4, 5, 23],
      5: [1, 2, 3, 4, 5, 33],
      6: [1, 2, 3, 4, 30, 42],
      7: [1, 2, 3, 4, 10, 42],
      8: [1, 2, 3, 18, 23, 42],
      9: [1, 2, 3, 10, 23, 42],
    });
    expect(lotto.firstCount).toEqual(1);
    expect(lotto.secondCount).toEqual(2);
    expect(lotto.thirdCount).toEqual(3);
    expect(lotto.fourthCount).toEqual(2);
    expect(lotto.fifthCount).toEqual(2);
  });
});

describe('로또 클래스 수익률 계산 테스트', () => {
  test('수익률을 계산한다. 1', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    lotto.firstCount = 0;
    lotto.secondCount = 1;
    lotto.thirdCount = 1;
    lotto.fourthCount = 1;
    lotto.fifthCount = 1;
    expect(lotto.profitCalculator(3000)).toEqual(1051833.33);
  });

  test('수익률을 계산한다. 2', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    lotto.firstCount = 0;
    lotto.secondCount = 0;
    lotto.thirdCount = 0;
    lotto.fourthCount = 0;
    lotto.fifthCount = 1;
    expect(lotto.profitCalculator(9000)).toEqual(55.56);
  });
});

describe('App 클래스 테스트', () => {
  test('입력 받은 당첨 번호를 배열로 바꾼다', () => {
    const app = new App();
    app.numbertoArray('1,2,3,4,5,6');
    expect(app.winningArray).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('App 클래스 예외 사항 테스트', () => {
  test('입력한 금액이 천원 단위가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      const app = new App();
      app.money = 33300;
      const exception = new Exception();
      exception.purchase(app.money);
    }).toThrow('[ERROR]');
  });
});
