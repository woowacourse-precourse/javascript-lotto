class Messages{
  pay_amount(){
    return "구입금액을 입력해 주세요."
  }
  number_of_lotto(number){
    return `\n${number}개를 구매했습니다.`
  }
  numbers(numbers){
    let numbers_message = '[';
    numbers.forEach((number, idx)=>{
      if(idx===numbers.length-1) { numbers_message += String(number); }
      else { numbers_message += (String(number)+', '); }
    });
    numbers_message += ']';
    return numbers_message;
  }
  input_win(){
    return '\n당첨 번호를 입력해 주세요.'
  }
  input_bonus(){
    return '\n보너스 번호를 입력해 주세요.'
  }
  result_title(){
    return '\n당첨 통계\n---'
  }
  ranks(rank, index){
    const ranks = ["3개 일치 (5,000원) - ",
                   "4개 일치 (50,000원) - ",
                   "5개 일치 (1,500,000원) - ",
                   "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
                   "6개 일치 (2,000,000,000원) - "];
    return `${ranks[index]}${rank.length}개`
  }
  profit(profit){
    return `총 수익률은 ${profit}%입니다.`
  }
}

module.exports = Messages;