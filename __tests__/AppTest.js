const App = require('../src/App');

describe('App 클래스 유닛 테스트', () => {
  test('숫자 배열로 로또를 발행한다.', () => {
    const app = new App();
    const lottoNumbers = app.publishLotto([1, 2, 4, 5, 3, 6]);

    expect(lottoNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('금액이 들어오면 금액/1000 개의 로또를 발행한다.', () => {
    const app = new App();
    const numbersList = app.generateNumbersList(8000);

    expect(numbersList.length).toEqual(8);

    numbersList.forEach((numbers) => {
      expect(numbers.length).toEqual(6);
    });
  });
});
