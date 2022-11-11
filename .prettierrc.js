module.exports = {
  singleQuote: true,
  // 문자열은 singleQuote로 ("" -> '')
  semi: true,
  //코드 마지막에 세미콜론이 있게 formatting
  tabWidth: 4,
  // 들여쓰기 너비는 4칸
  trailingComma: 'all',
  // 배열 키:값 뒤에 항상 콤마를 붙히도록 formatting
  printWidth: 80,
  // 코드 한줄이 maximum 80칸
  arrowParens: 'avoid',
  // 화살표 함수가 하나의 매개변수를 받을 때 괄호를 생략하게 formatting
  endOfLine: "auto",
  // windows에 뜨는 'Delete cr' 에러 해결
};