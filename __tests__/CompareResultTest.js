const Result = require('../src/Result');
const result = new Result();

describe('결과 클래스 테스트', () => {
  test('로또 번호와 당첨 번호가 3개 일치하면 5000원', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const myLottoNumber = '1, 2, 3, 45, 44, 43';
    const winnings = result.compare(lottoNumber, myLottoNumber);
    expect(winnings).toBe('5,000원');
  });
  test('로또 번호와 당첨 번호가 4개 일치하면 50000원', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const myLottoNumber = '1, 2, 3, 4, 44, 43';
    const winnings = result.compare(lottoNumber, myLottoNumber);
    expect(winnings).toBe('50,000원');
  });
  test('로또 번호와 당첨 번호가 5개 일치하면 1,500,000원', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const myLottoNumber = '1, 2, 3, 4, 5, 43';
    const winnings = result.compare(lottoNumber, myLottoNumber);
    expect(winnings).toBe('1,500,000원');
  });
  test('로또 번호와 당첨 번호가 5개 일치하고 보너스 번호가 일치하면 30,000,000원', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const myLottoNumber = '1, 2, 3, 4, 5, 7';
    const bonusNumber = '7';
    const winnings = result.compare(lottoNumber, myLottoNumber, bonusNumber);
    expect(winnings).toBe('30,000,000원');
  });
  test('로또 번호와 당첨 번호가 5개 일치하면 2,000,000,000원', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const myLottoNumber = '1, 2, 3, 4, 5, 6';
    const winnings = result.compare(lottoNumber, myLottoNumber);
    expect(winnings).toBe('2,000,000,000원');
  });
});
