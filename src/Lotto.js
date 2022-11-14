class Lotto {
  #numbers;

  constructor(numbers) {
    //인스턴스 생성 및 초기화
    this.validate(numbers);
    this.duplicatecheck(numbers);
    this.rangecheck(numbers);
    this.#numbers = numbers;
  }

  //프로토타입 메서드
  //당첨 번호
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }


  //중복되지 않는 숫자
  duplicatecheck(numbers){
    for(var i=0 ;i<5;i++){
      for(var j=i+1 ;j<6;j++){
        if (numbers[i] == numbers[j])
         throw new Error('[ERROR]duplicate numberes');
      }
    }
  }

  //1~45까지의 숫자
  rangecheck(numbers){
    for(var i =0;i<6;i++){
      if (numbers[i]<1 || numbers[i]>45)
        throw new Error('[ERROR]range error');
    }
  }

  getnumber(){
    return this.#numbers;
  }

  calculate_match(winning_numbers, k){
    var numbers = this.#numbers;
    //k만큼 일치하는지 확인해야함
    var count = 0;
    for (var i =0;i<6;i++){
      if (numbers.includes(parseInt(winning_numbers.#numbers[i]))) count++;
    }

    if (count == k) return true;
  }

  bonus_match(bonus_number){
    var numbers = this.#numbers;
    if(numbers.includes(bonus_number)) return true;
  }
  
  print_numbers(){
    const MissionUtils = require("@woowacourse/mission-utils");
    const numbers = this.#numbers;
    var sentence = "["
    sentence = sentence + numbers[0].toString();
    for(var i =1;i<6;i++){
      sentence = sentence + ', ' + numbers[i].toString();
    }
    sentence = sentence+ "]"
    MissionUtils.Console.print(sentence);
  }

}

module.exports = Lotto;
