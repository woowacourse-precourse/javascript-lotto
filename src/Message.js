const GAME = { // 게임 정보
  START: 1,
  END: 45,
  COUNT: 6,
  PRICE: 1000,
};

const MESSAGE = { // 출력 메세지
  BUY: '구입금액을 입력해 주세요.\n',
  COUNT: (count) => `\n${count}개를 구매했습니다.`,
  WIN_NUM: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUM: '보너스 번호를 입력해 주세요.\n',
  RESULT: '당첨 통계\n---',
  first: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  second: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  third: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  fourth: (count) => `4개 일치 (50,000원) - ${count}개`,
  fifth: (count) => `3개 일치 (5,000원) - ${count}개`,
  return: (percentage) => `총 수익률은 ${percentage}%입니다.`,
};

const RANK = { // 등수
  3: 'fifth',
  4: 'fourth',
  5: 'third',
  6: 'first',
};

