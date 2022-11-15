const REWARDS = [0, 5000, 50000, 1500000, 30000000, 2000000000]
const RANK_MESSAGE = ['', 
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ', 
  '5개 일치 (1,500,000원) - ', 
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ', 
  '6개 일치 (2,000,000,000원) - ',
]

const INPUT_MESSAGE = {
    BUDGET: '구입금액을 입력해 주세요.\n',
    LOTTO: '당첨 번호를 입력해주세요.\n',
    BONUS: '보너스 번호를 입력해 주세요.\n',
}

module.exports = {
    REWARDS,
    RANK_MESSAGE,
    INPUT_MESSAGE,
}