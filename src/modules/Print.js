class Print {
  //로또 일치 개수 객체 출력
  haveObject(correctArr) {
    let object = {};
    for (let index = 3; index < 7; index += 1) {
      object[index] = 0;
    }
    object[5.5] = 0;
    correctArr.forEach((element) => {
      switch (element) {
        case 3:
          object[element] += 1;
          break;
        case 4:
          object[element] += 1;
          break;
        case 5:
          object[element] += 1;
          break;
        case 6:
          object[element] += 1;
          break;
        case 7:
          object[element] += 1;
          break;
        default:
          break;
      }
    });
    return object;
  }
}
module.exports = Print;
