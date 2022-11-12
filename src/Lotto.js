class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.duplicateCheck(numbers);
    this.numberRangeCheck(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  duplicateCheck(numbers) {
    let tempNumbers = new Set(numbers);
    tempNumbers = [...tempNumbers];

    if(tempNumbers.length < 6){
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }
  }

  numberRangeCheck(numbers) {
    for(let number of numbers){
      if(number < 1 || number > 45) throw new Error("[ERROR] 로또 번호는 1 이상 45 이하의 정수여야 합니다.");
    }
  }

  bonusCharacterCheck(bonus) {
    if (!Number(bonus)) {
      throw new Error("[ERROR] 보너스 점수는 정수로 입력해야 합니다.");
    }
  }

  bonusRangeCheck(bonus) {
    if(bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 점수는 1 이상 45 이하의 정수여야 합니다.");
    }
  }

  bonusDuplicateCheck(bonus) {
    if(this.#numbers.includes(Number(bonus))) {
      throw new Error("[ERROR] 보너스 점수는 당첨 번호와 중복되면 안됩니다.");
    }
  }

  winningCalculation(purchaseLottos, bonus) {
    let resultTable = { reward: 0 };
    for(let purchaseLotto of purchaseLottos) {
      const sameCount = this.sameCheck(purchaseLotto);
      if(sameCount < 3) continue;

      const [reward, rank] = this.rewardCheck(purchaseLotto, sameCount, bonus);
      resultTable = {
        ...resultTable,
        reward: resultTable.reward += reward,
        [rank]: resultTable.rank ? resultTable.rank += 1 : 1,
      }
    }
    return resultTable;
  };

  sameCheck(purchaseLotto) {
    let sameCount = 0;
    purchaseLotto.forEach((number) => {
      if(this.#numbers.includes(number)) sameCount += 1;
    });
    return sameCount;
  }

  rewardCheck(purchaseLotto, sameCount, bonus) {
    switch(sameCount) {
      case 3: {
        return [5000, 'fifty'];
      } 
      case 4: {
        return [50000, 'fourth']
      }
      case 5: {
        if(purchaseLotto.includes(Number(bonus))) return [30000000, 'second'];
        return [1500000, 'third'];
      }
      case 6: {
        return [2000000000, 'first'];
      }
    }
  }
}

module.exports = Lotto;
