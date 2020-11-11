let number = document.getElementById("number");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
// console.log(number.innerText); //number의 객체
// number.innerText = ++count // 객체의 속성을 다시 지정.

increase.onclick = function () {
  //.on에 대한 것들은, event에 대한 것임.
  let count = number.innerText;
  count = parseInt(count); //parseInt는 int로 타입 변환
  number.innerText = ++count;
};
decrease.onclick = function () {
  let count = number.innerText;
  count = parseInt(count); //parseInt는 int로 타입 변환
  number.innerText = --count;
};
