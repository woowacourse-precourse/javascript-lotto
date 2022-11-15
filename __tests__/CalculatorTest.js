const App = require('../src/App');
const { Console } = require('@woowacourse/mission-utils');
const Calculator = require('../src/Calculator');
const { LOTTO_PRIZE } = require('../src/Constants');

afterEach(() => {
  Console.close();
});

describe('Utils 클래스 matchNumberCount() 테스트', () => {
  test('당첨 숫자와 유저 구매 숫자의 같은 값 개수 확인', () => {
    const calculator = new Calculator();
    const winNumbers = [1, 2, 3, 4, 5, 6, 7];
    const userlottoNumbers = [1, 3, 5, 9, 40, 41];
    const count = calculator.matchNumberCount(winNumbers, userlottoNumbers);
    expect(count).toEqual(3);
  });
});

describe('Utils 클래스 profit() 테스트', () => {
  test('당첨내역과 내역별 상금이 주어졌을때 누적 상금이 계산되는지 확인', () => {
    const calculator = new Calculator();
    const resultMap = {
      fifthGrade: 1,
      forthGrade: 1,
      thirdGrade: 0,
      secondGrade: 0,
      firstGrade: 0,
      loseMoney: 5,
    };

    const profit = calculator.profit(resultMap);
    expect(profit).toEqual(55000);
  });
  test('당첨내역과 내역별 상금이 주어졌을때 누적 상금이 계산되는지 확인', () => {
    const calculator = new Calculator();
    const resultMap = {
      fifthGrade: 0,
      forthGrade: 0,
      thirdGrade: 1,
      secondGrade: 1,
      firstGrade: 1,
      loseMoney: 5,
    };
    const profit = calculator.profit(resultMap);
    expect(profit).toEqual(2031500000);
  });
});

describe('utils클래스의 profitRate() 테스트', () => {
  test('수익률 소수점이 1자리만 나오는지 확인', () => {
    const calculator = new Calculator();
    const profit = calculator.profitRate(1000, 3000);
    expect(/^(\d*)[\.]?(\d{0,1})?$/g.test(profit)).toBeTruthy();
  });

  test('수익률이 소수점 2자리일경우 정규표현식에서 false나오는지 확인', () => {
    const profit = 33.33;
    expect(/^(\d*)[\.]?(\d{0,1})?$/g.test(profit)).toBeFalsy();
  });

  test('수익률 맞는지 확인', () => {
    const calculator = new Calculator();
    const profit = calculator.profitRate(1000, 3000);
    expect(profit).toEqual(33.3);
  });
});
