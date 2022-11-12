const Shop = require('../src/Shop');
const { ERROR } = require('../src/utiles/Constant');

describe('로또판매점 클래스 테스트', () => {
  test('1000원 단위로 입력하지 않으면 예외 발생', () => {
    expect(() => new Shop(1500)).toThrow(ERROR.PREFIX);
  });

  test('올바르게 1000원 단위로 입력', () => {
    expect(() => new Shop(12000)).toBeTruthy();
  });

  test('숫자가 아닌 값을 입력하면 예외 발생', () => {
    expect(() => new Shop('a')).toThrow(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
  });

  test('개수만큼의 로또 번호들을 반환하는지 테스트', () => {
    const shop = new Shop(3000);
    expect(shop.getLottoNumbers().length).toBe(shop.getLottoCount());
  });

  test('로또번호가 오름차순인지 테스트', () => {
    const shop = new Shop(2000);
    const lottoNumbers = shop.getLottoNumbers();
    expect(
      lottoNumbers.filter(
        (lottoNumber, i) =>
          lottoNumber.sort((a, b) => a - b).toString() ===
          lottoNumbers[i].toString()
      ).length
    ).toEqual(lottoNumbers.length);
  });
});
