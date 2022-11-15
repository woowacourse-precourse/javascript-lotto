class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers; //번호 
    this.bonusnumber;  //보너스 번호 
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    //number.length ==6을 충족시켰을 경우, 
    for(var i=0;i<6;i++){
      const firstnum = numbers[i];

      for (let j=i+1;j<numbers.length;j++){
        if (firstnum === numbers[j]){
          throw new Error("[Error]로또 번호는 중복되는 값을 입력할 수 없습니다.");
        }
      }
    } //예외 1. 로또번호는 중복될 수 없다
    for(let k=0;k<numbers.length;k++){
      if(numbers[k]<1 || numbers[k]>45){
        throw new Error("[Error] 로또 숫자 범위는 1에서 45 사이를 벗어날 수 없습니다.");
      }
    }
    //예외 2. 로또 숫자 범위는 1에서 45 사이이다. 
  }

// TODO: 추가 기능 구현
//기능 1. 로또 금액 입력 받기
getBudget(){
  let budget;

}
//기능 2. 입력받은 금액 처리하기(1000원 단위로 끊고 나머지는 예외처리) <<미완
//기능 3. 당첨 번호 입력받기 
lottoWinnum(){
  var winNum = new winNumArray(); 
  winNum.split(','); //기능 4. 당첨 번호 처리하기 (쉼표를 기준으로 구분하기)
  
  const bonusNum=(numbers)=> { console.log(numbers)}  //보너스 넘버 입력받고 출력하기 
  data.push(bonusNum);

}
}

module.exports = Lotto;
