const WinningRank = require('../src/model/WinningRank');

describe('WinningChecker 클래스 테스트', () => {
  test('기능 테스트: 6개의 번호가 일치하면 1등을 출력한다.', () => {
    let lottoNumbers = [1, 9, 16, 24, 31, 40];
    let winningNumbers = [1, 9, 16, 24, 31, 40];
    let bonusNumber = 8;
    let rank = 1;
    expect(
      new WinningRank(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      ).getWinningRank()
    ).toEqual(rank);
  });

  test('기능 테스트: 5개의 번호와 보너스 번호가 일치하면 2등을 출력한다.', () => {
    let lottoNumbers = [1, 9, 16, 24, 31, 40];
    let winningNumbers = [1, 3, 9, 16, 24, 40];
    let bonusNumber = 31;
    let rank = 2;
    expect(
      new WinningRank(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      ).getWinningRank()
    ).toEqual(rank);
  });

  test('기능 테스트: 5개의 번호가 일치하며 보너스 번호가 일치하지 않으면 3등을 출력한다.', () => {
    let lottoNumbers = [1, 9, 16, 24, 31, 40];
    let winningNumbers = [1, 3, 9, 16, 24, 31];
    let bonusNumber = 8;
    let rank = 3;
    expect(
      new WinningRank(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      ).getWinningRank()
    ).toEqual(rank);
  });

  test('기능 테스트: 4개의 번호가 일치하면 4등을 출력한다.', () => {
    let lottoNumbers = [1, 9, 16, 24, 31, 40];
    let winningNumbers = [1, 2, 3, 9, 16, 24];
    let bonusNumber = 8;
    let rank = 4;
    expect(
      new WinningRank(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      ).getWinningRank()
    ).toEqual(rank);
  });

  test('기능 테스트: 3개의 번호가 일치하면 5등을 출력한다.', () => {
    let lottoNumbers = [1, 9, 16, 24, 31, 40];
    let winningNumbers = [1, 2, 3, 16, 24, 45];
    let bonusNumber = 9;
    let rank = 5;
    expect(
      new WinningRank(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      ).getWinningRank()
    ).toEqual(rank);
  });

  test('기능 테스트: 3개 미만의 번호가 일치하면 null을 출력한다.', () => {
    let lottoNumbers = [1, 9, 16, 24, 31, 40];
    let winningNumbers = [1, 2, 3, 22, 24, 45];
    let bonusNumber = 8;
    expect(
      new WinningRank(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      ).getWinningRank()
    ).toEqual(null);
  });
});
