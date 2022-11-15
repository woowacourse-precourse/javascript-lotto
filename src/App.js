class App {
  play() {}
}
const candidates = [];
      for (i = 1; i <= 45; i += 1) {
        candidates.push(i);
      }
      
      while (candidates.length > 0) {
        let num = Math.floor(Math.random() * candidates.length); 
       
        let leftNum = candidates.splice(num, 1)[0];
        mixedNum.push(leftNum);
      }
      console.log(mixedNum);
      let bonus = mixedNum[mixedNum.length - 1] //mixedNum의 마지막 숫자
      console.log(bonus);


     
      let lottoNum = mixedNum.slice(0, 6).sort((prev, curr) => prev - curr); //배열의 0-5번째 요소 추출
      console.log(lottoNum);
      


    
      let lottoNum2 = mixedNum.splice(0, 6); //배열의 0부터 6개의 요소 추출
      console.log(lottoNum2);
      console.log(lottoNum2);


      console.log(`로또숫자 ${lottoNum} / 보너스 숫자 ${bonus}`)

     
      let show = document.querySelector("#show");

     
      function showFn(num, show) {
        let ball = document.createElement('span');
        //ball.textContent = lottoNum[num];
        ball.textContent = num;
        show.appendChild(ball);

        //ball css            
        if (num < 10) {
          color = 'yellow';
        } else if (num < 20) {
          color = 'aqua';
        } else if (num < 30) {
          color = 'pink';
        } else if (num < 40) {
          color = 'skyblue';
        } else {
          color = 'gold';
        }

        ball.style.backgroundColor = color;
        ball.style.display = 'inline-block';
        ball.style.margin = '10px';
        ball.style.padding = '15px';
        ball.style.borderRadius = '50%';
        //ball class 이름 삽입
        ball.className = 'No' + lottoNum[num];

      };

      
      for (let i = 0; i < lottoNum.length; i += 1) {
        //closure함수의 매개변수 j는 function scope 성격으로 밖으로 나가지 못함.
        function closure(j) { //i의 값(0~5)를 j에게 전달
          //함수안에서 j의 값만 그대로 사용
          setTimeout(function() {
            showFn(lottoNum[j], show);
          }, j * 1000);
        }
        closure(i); //i가 0-5까지의 값
      }

     
      setTimeout(function() {
        showFn(bonus, show);
      }, 7000);

module.exports = App;
