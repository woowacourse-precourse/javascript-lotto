const withoutRemainderByThousand = (money)=>{
  return money%1000 === 0
}

const isNotNumber = (money)=>{
  return !isNaN(money);
}

const smallerThanThousand = (money)=>{
  return !money<1000
}

module.exports = {
  withoutRemainderByThousand,
  isNotNumber,
  smallerThanThousand
};