/* eslint-disable max-lines-per-function */
const lottoResult = require('../src/utils/lottoResult');

const winningNumbers = [6, 7, 8, 9, 10, 11];
const bonusNumber = 12;

const getMatchingNumbersResult = (userLottoNumbers) =>
  lottoResult.getMatchingNumbersResult(userLottoNumbers, winningNumbers, bonusNumber);

const getAllMatchingNumbersResult = (userAllLottoNumbers) =>
  lottoResult.getAllMatchingNumbersResult(userAllLottoNumbers, winningNumbers, bonusNumber);

describe('당첨 통계 계산 테스트', () => {
  test('사용자의 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호 개수 6개, 보너스 번호 개수 0개가 나온다.', () => {
    const userLottoNumbers = [6, 7, 8, 9, 10, 11];
    const result = getMatchingNumbersResult(userLottoNumbers);
    const answer = [6, 0];

    expect(result).toEqual(answer);
  });

  test('사용자의 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호 개수 5개, 보너스 번호 개수 1개가 나온다.', () => {
    const userLottoNumbers = [6, 7, 8, 9, 10, 12];
    const result = getMatchingNumbersResult(userLottoNumbers);
    const answer = [5, 1];

    expect(result).toEqual(answer);
  });

  test('사용자의 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호 개수 5개, 보너스 번호 개수 0개가 나온다.', () => {
    const userLottoNumbers = [6, 7, 8, 9, 10, 42];
    const result = getMatchingNumbersResult(userLottoNumbers);
    const answer = [5, 0];

    expect(result).toEqual(answer);
  });

  test('사용자의 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호 개수 4개, 보너스 번호 개수 0개가 나온다.', () => {
    const userLottoNumbers = [6, 7, 8, 9, 26, 33];
    const result = getMatchingNumbersResult(userLottoNumbers);
    const answer = [4, 0];

    expect(result).toEqual(answer);
  });

  test('사용자의 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호 개수 3개, 보너스 번호 개수 0개가 나온다.', () => {
    const userLottoNumbers = [6, 7, 8, 42, 17, 19];
    const result = getMatchingNumbersResult(userLottoNumbers);
    const answer = [3, 0];

    expect(result).toEqual(answer);
  });

  test('사용자의 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호 개수 2개, 보너스 번호 개수 0개가 나온다.', () => {
    const userLottoNumbers = [6, 7, 28, 16, 22, 42];
    const result = getMatchingNumbersResult(userLottoNumbers);
    const answer = [2, 0];

    expect(result).toEqual(answer);
  });

  test('사용자의 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호 개수 1개, 보너스 번호 개수 0개가 나온다.', () => {
    const userLottoNumbers = [6, 1, 13, 5, 37, 26];
    const result = getMatchingNumbersResult(userLottoNumbers);
    const answer = [1, 0];

    expect(result).toEqual(answer);
  });

  test('사용자의 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호 개수 0개, 보너스 번호 개수 0개가 나온다.', () => {
    const userLottoNumbers = [19, 14, 3, 45, 15, 17];
    const result = getMatchingNumbersResult(userLottoNumbers);
    const answer = [0, 0];

    expect(result).toEqual(answer);
  });

  test('사용자의 모든 로또 번호와 당첨 번호를 비교하여 일치하는 당첨 번호, 보너스 번호 개수를 모두 구한다.', () => {
    const userAllLottoNumbers = [
      [23, 19, 26, 7, 12, 43],
      [6, 7, 8, 9, 10, 11],
      [16, 2, 10, 21, 36, 32],
      [7, 8, 9, 10, 11, 12],
    ];
    const result = getAllMatchingNumbersResult(userAllLottoNumbers);
    const answer = [
      [1, 1],
      [6, 0],
      [1, 0],
      [5, 1],
    ];

    expect(result).toEqual(answer);
  });

  test('맞춘 당첨 번호의 개수와 보너스 번호의 개수에 맞게 1등부터 5등까지 달성한 횟수를 계산한다.', () => {
    const matchingNumbersResult = [
      [6, 0],
      [5, 1],
      [5, 0],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
      [5, 0],
      [5, 1],
      [4, 1],
      [3, 1],
      [2, 1],
      [5, 0],
    ];
    const result = lottoResult.getLank(matchingNumbersResult);
    const answer = [1, 2, 3, 2, 2];

    expect(result).toEqual(answer);
  });

  test('당첨 내역만큼 총 수익을 계산한다.', () => {
    const ranks = [
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 2, 1, 0, 0],
      [1, 0, 1, 3, 0],
      [0, 0, 1, 0, 2],
      [0, 0, 0, 0, 0],
    ];
    const answers = [2000000000, 2030000000, 61500000, 2001650000, 1510000, 0];

    ranks.forEach((rank, index) => {
      const result = lottoResult.getProfit(rank);
      const answer = answers[index];

      expect(result).toEqual(answer);
    });
  });
});
