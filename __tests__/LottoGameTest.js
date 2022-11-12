const LottoGame = require('../src/LottoGame');
const generateRandomSixDigits = require('../src/utils/RandomNumberGenerator');

describe('로또 게임 클래스 테스트', () => {
  test('중복되지 않는 6개 숫자 생성', () => {
    const RANDOM_NUMBER_SET = new Set(generateRandomSixDigits());

    expect(RANDOM_NUMBER_SET.size).toEqual(6);
  });
});
