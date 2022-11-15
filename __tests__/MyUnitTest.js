const App = require('../src/App');
const Lotto = require('../src/Lotto');

describe('My Unit test', () => {
  test('1000원 단위가 아닌 로또 구입 금액 입력시 오류가 난다.', () => {
    const app = new App();
    const amount = 4500;

    expect(() => {
      app.setAmount(amount);
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액 입력시 숫자를 제외한 입력을 하면 오류가 난다.', () => {
    const app = new App();
    const amount = '오천원';

    expect(() => {
      app.setAmount(amount);
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액만큼의 로또가 발행되어야 한다.', () => {
    const app = new App();
    const amount = 5000;
    app.setAmount(amount);
    app.issueLottos();
    const lottos = app.getLottos();

    expect(lottos).toHaveLength(amount / 1000);
  });

  test('발행한 로또는 오름차순으로 정렬되어야 한다.', () => {
    const app = new App();
    const amount = 5000;
    app.setAmount(amount);
    app.issueLottos();
    const lottos = app.getLottos();
    lottos.forEach((lotto) => {
      const sortedLotto = [...lotto.getNumbers()];
      sortedLotto.sort((a, b) => a - b);
      expect(lotto.getNumbers()).toEqual(sortedLotto);
    });
  });

  test('중복된 당첨 번호가 있을 때 오류가 난다.', () => {
    const app = new App();
    const winNumbers = [1, 2, 3, 4, 5, 1];

    expect(() => {
      app.setWinNumbers(winNumbers);
    }).toThrow('[ERROR]');
  });

  test('숫자가 아닌 당첨 번호가 있을 때 오류가 난다.', () => {
    const app = new App();
    const winNumbers = ['일', 2, 3, 4, 5, 6];

    expect(() => {
      app.setWinNumbers(winNumbers);
    }).toThrow('[ERROR]');
  });

  test('1~45 범위를 벗어난 당첨 번호가 있을 때 오류가 난다.', () => {
    const app = new App();
    const winNumbers = [0, 1, 2, 3, 4, 5];

    expect(() => {
      app.setWinNumbers(winNumbers);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 6개가 아닐 때 오류가 난다.', () => {
    const app = new App();
    const winNumbers = [1, 2, 3, 4, 5];

    expect(() => {
      app.setWinNumbers(winNumbers);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호와 당첨 번호가 중복될 때 오류가 발생한다.', () => {
    const app = new App();
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 1;

    expect(() => {
      app.setWinNumbers(winNumbers);
      app.setBonusNumber(bonusNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아닐 때 오류가 난다.', () => {
    const app = new App();
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 'one';

    expect(() => {
      app.setWinNumbers(winNumbers);
      app.setBonusNumber(bonusNumber);
    }).toThrow('[ERROR]');
  });

  test('1~45 범위를 벗어난 보너스 번호일 때 오류가 난다.', () => {
    const app = new App();
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 0;

    expect(() => {
      app.setWinNumbers(winNumbers);
      app.setBonusNumber(bonusNumber);
    }).toThrow('[ERROR]');
  });

  test('당첨 내역을 구하는 기능', () => {
    const app = new App();
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 6개 일치
      new Lotto([1, 2, 4, 5, 6, 7]), // 5개 일치 + 보너스
      new Lotto([1, 3, 4, 5, 6, 7]), // 5개 일치 + 보너스
      new Lotto([1, 3, 4, 5, 6, 10]), // 5개 일치
      new Lotto([1, 3, 4, 6, 8, 10]), // 4개 일치
      new Lotto([2, 3, 4, 6, 8, 10]), // 4개 일치
      new Lotto([2, 41, 42, 43, 44, 45]), // 1개 일치
      new Lotto([1, 3, 4, 43, 44, 45]), // 3개 일치
      new Lotto([1, 3, 4, 5, 44, 45]), // 4개 일치
    ]; // [1, 2, 1, 3, 1]
    app.setWinNumbers(winNumbers);
    app.setBonusNumber(bonusNumber);
    const winResult = app.makeLottosResult(lottos);

    expect(winResult).toEqual([1, 2, 1, 3, 1]);
  });

  test('수익률 구하는 기능', () => {
    const app = new App();
    const amounts = [1000, 12000, 5000, 4000, 230000];
    const revenues = [30000000, 0, 2000005000, 10000, 5000];
    const expectedRevenueRates = [
      '3000000.0',
      '0.0',
      '40000100.0',
      '250.0',
      '2.2',
    ];

    amounts.forEach((amount, index) => {
      app.setAmount(amount);
      app.setRevenue(revenues[index]);
      const revenueRate = app.getRevenueRate();

      expect(revenueRate).toEqual(expectedRevenueRates[index]);
    });
  });
});
