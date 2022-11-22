const { validateMoney, validateBonusNumber, getLottoRanking } = require('../src/Utils.js');

describe('유틸 클래스 테스트', () => {
  test('구입 금액이 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validateMoney('8200K');
    }).toThrow('[ERROR]');
  });

  test('구입 금액이 1000원 단위가 아닐경우 예외가 발생한다.', () => {
    expect(() => {
      validateMoney('83100');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber('a', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1~45를 벗어날 경우 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber('0', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber('3', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('getLottoRanking 테스트', () => {
    const lottos = [
      [1, 3, 13, 24, 25, 36],
      [31, 2, 5, 7, 8, 11],
      [5, 10, 15, 2, 16, 32],
      [3, 8, 4, 2, 32, 40],
      [1, 2, 8, 4, 32, 41],
      [1, 2, 4, 8, 16, 7],
      [1, 2, 4, 8, 16, 32],
    ];
    const winningNumbers = [1, 2, 4, 8, 16, 32];
    const bonusNumber = 7;
    const rankings = [0, 0, 5, 4, 3, 2, 1];

    lottos.forEach((lotto, idx) => {
      expect(getLottoRanking(lotto, winningNumbers, bonusNumber)).toEqual(rankings[idx]);
    });
  });
});
