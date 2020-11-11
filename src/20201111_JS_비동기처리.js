/*
 * 비동기 처리 vs. 동기식 처리
 * 파이썬 소켓 프로그래밍에서 사용했던 accept()나
 * recv() 같은 동작을 생각해 보자. 혹은 input()
 * 동기식 처리 : input(), accept()는 입력이 될 때까지 대기.
 * 비동기식 처리 : recv()는 non-blocking. 데이터가 오는 것을 기다리지 않음.
 * setTimeout( 함수, 시간) : 함수와
 * 일정시간동안 기다렸다가 명령어를 수행
 */

// 자바스크립트에서는 함수의 인자로 함수를 전달하는 것은
//일반적인 문법이다.

/*
console.log("======================");
console.log("start");
setTimeout(function(){
  console.log("end");
}, 3000);
console.log("restart")
*/

// 이러한 비동기 처리를 해결하는 방법이 몇 가지 있다.

// 1. 콜백을 이용한 비동기 처리

/*
console.log("+++++++++++++++++++++++");
console.log("start");

function timeOut(callback_function) {
  setTimeout(function() {
    console.log("end");
    if (callback_function) {
      callback_function();
    }
  }, 3000);
}
*/

/*
timeOut( () => {
  console.log("restart");
});

timeOut( function() {
  console.log("restart");
});
*/

// 2. Call back 지옥
// 예를 들면, set Timeout을 이용해서,
// 초당 한번씩 동작하는 프로그램을 작성하고 싶은 경우.

/*
let count = 0;

for (let i; i < 10; i++) {
  setTimeout(function () {
    count++;
    console.log(count); 
  }, 1000);
}
console.log("end");
*/

function timeOut(n, callback_function) {
  setTimeout(function () {
    let count = n + 1;
    console.log(count);
    if (callback_function) {
      callback_function(count);
    }
  }, 1000);
}

timeOut(0, (n) => {
  console.log("end");
});
