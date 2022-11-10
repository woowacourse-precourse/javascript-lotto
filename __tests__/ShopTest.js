const Shop = require('../src/Shop');
const { ERROR } = require('../src/utiles/Constant');

describe('로또판매점 클래스 테스트', () => {
  test('1000원 단위로 입력하지 않으면 예외 발생', () => {
    expect(() => new Shop(1500)).toThrow(ERROR.PREFIX);
  });

  test('올바르게 1000원 단위로 입력', () => {
    expect(() => new Shop(12000)).toBeTruthy();
  });
});
