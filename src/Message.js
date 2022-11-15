class Message {
    static PLEASE_TYPING_MONEY = "구입금액을 입력해 주세요.\n";
    static PLEASE_TYPING_CORRECT_NUMBER = "당첨 번호를 입력해 주세요.\n";
    static PLEASE_TYPING_BONUS_NUMBER = "보너스 번호를 입력해 주세요.\n";
    static CANT_DIVIDED_BY_ONETHOUSAND = "[ERROR]1000으로 나누어 떨어지지 않습니다."
    static LOTTO_NUMBER_LENGTH_IS_SIX = "[ERROR] 로또 번호는 6개여야 합니다."
    static EXIST_BONUS_NUMBER_IN_CORRECT_NUMBER = "[ERROR]당첨번호에 보너스 번호가 있습니다."
    static LOTTO_NUMBER_BIGGER_THAN_ONE_SMALLER_THAN_FOURTY_FIVE = "[ERROR]로또 번호는 1부터 45 사이의 숫자여야 합니다."
    static NOT_NUMBER = "[ERROR]숫자가 아닙니다.";
    static SAME_NUMBER = "[ERROR]중복된 숫자가 있습니다.";
}
  
  module.exports = Message;
  