const ISNUMBER = '[ERROR] 숫자를 입력해주세요';
const ISNUMBERDIVIDED = (SHARE) => `[ERROR] ${SHARE}로 나누어 떨어져야 합니다`;
const ISNUMBERBIGGER = (STANDARD) => `[ERROR] ${STANDARD}보다는 커야 합니다`;
const ISSPLIT = (DIVISION) => `[ERROR] ${DIVISION}로 구분되어야 합니다.`;
const ISLENGTH = (LENGTH) => `[ERROR] ${LENGTH}개여야 합니다`;
const ISREPEAT = '[ERROR] 중복된 요소가 있습니다';
const ISRANGE = (START, END) => `[ERROR] ${START} ~ ${END}사이여야 합니다.`;
const ISARRAYELEMENTTYPE = (TYPE) => `[ERROR] ${TYPE}으로 구성되어야 합니다.`;

module.exports = {
  ISNUMBER,
  ISNUMBERDIVIDED,
  ISNUMBERBIGGER,
  ISSPLIT,
  ISLENGTH,
  ISREPEAT,
  ISRANGE,
  ISARRAYELEMENTTYPE,
};
