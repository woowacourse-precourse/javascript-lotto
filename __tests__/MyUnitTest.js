const App = require('../src/App');

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
      const sortedLotto = [...lotto];
      sortedLotto.sort();
      expect(lotto).toEqual(sortedLotto);
    });
  });

  test('중복된 당첨 번호가 있을 때 오류가 난다.', () => {
    const app = new App();
    const winNumbers = [1, 2, 3, 4, 5, 1];

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
});
