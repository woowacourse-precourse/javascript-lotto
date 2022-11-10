let Calculate = require('../src/model/Calculation');

let lotto = [[8, 21, 23, 41, 42, 43],
              [3, 5, 11, 16, 32, 38],
              [7, 11, 16, 35, 36, 44],
              [1, 8, 11, 31, 41, 42],
              [13, 14, 16, 38, 42, 45],
              [7, 11, 30, 40, 42, 43],
              [2, 13, 22, 32, 38, 45],
              [1, 3, 5, 14, 22, 45]];

describe('로또 모델 테스트', () => {
  test('1등', () => {
    let calc = new Calculate();
    let answers = [1,3,5,14,22,45];
    let bonusNum = 7;
    expect(calc.testAllLottos(lotto, answers, bonusNum)).toEqual([1,0,0,0,0]);
  });

  test('2등', () => {
    let calc = new Calculate();
    let answers = [1,3,5,14,22,40];
    let bonusNum = 45;
    expect(calc.testAllLottos(lotto, answers, bonusNum)).toEqual([0,1,0,0,0]);
  });

  test('3등', () => {
    let calc = new Calculate();
    let answers = [1,3,5,14,22,40];
    let bonusNum = 7;
    expect(calc.testAllLottos(lotto, answers, bonusNum)).toEqual([0,0,1,0,0]);
  });

  test('4등', () => {
    let calc = new Calculate();
    let answers = [13, 14, 15, 16, 17, 45];
    let bonusNum = 20;
    expect(calc.testAllLottos(lotto, answers, bonusNum)).toEqual([0,0,0,1,0]);
  });

  test('5등', () => {
    let calc = new Calculate();
    let answers = [13, 14, 15, 16, 17, 18];
    let bonusNum = 1;
    expect(calc.testAllLottos(lotto, answers, bonusNum)).toEqual([0,0,0,0,1]);
  });
})