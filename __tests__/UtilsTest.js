const {
  getSameElemetCount,
  doesArrayIncludeNumber,
  stringToNumberArray,
} = require('../src/utils');

test(',로 구분된 문자열을 정렬된 숫자 배열로 반환한다.', () => {
  strings = ['4,5,1,6,2,3', '13,16,24,41,12,3'];
  answer = [
    [1, 2, 3, 4, 5, 6],
    [3, 12, 13, 16, 24, 41],
  ];

  strings.forEach((string, idx) => {
    expect(stringToNumberArray(string)).toEqual(answer[idx]);
  });
});

test('두 배열이 모두 가진 숫자 요소의 개수를 반환한다.', () => {
  const arrayAs = [
    [1, 2, 3, 4, 5, 6],
    [1, 5, 8, 31, 24, 45],
    [5, 6, 7, 8, 9, 10],
  ];
  const arrayBs = [
    [3, 4, 5, 6, 1, 2],
    [8, 1, 44, 31, 9, 10],
    [11, 12, 13, 14, 15, 16],
  ];
  const answers = [6, 3, 0];

  arrayAs.forEach((arrayA, idx) => {
    expect(getSameElemetCount(arrayA, arrayBs[idx])).toBe(answers[idx]);
  });
});

test('배열에 숫자가 포함되어 있다면 true를 반환한다.', () => {
  const arrays = [
    [1, 2, 3, 4, 5, 6],
    [12, 14, 21, 25, 36, 45],
  ];
  const numbers = [3, 25];

  arrays.forEach((array, idx) => {
    expect(doesArrayIncludeNumber(array, numbers[idx])).toBe(true);
  });
});
