/*
 * promise
 * 콜백을 사용하지 않고 비동기 처리를 할 수 있는
 * 또 다른 방법(쉬운)
 */
//프로미스는 비동기를 처리하는 객체이다.
// let promise = new Promise();

/*
promise = new Promise( function(resolve, reject) Promise()
// 비동기 처리가 완료되서, 프로미스 객체가 결과를 반환한 상태
resolve(); --> 이행(fulfilled)
// 실패(Rejected) 비동기 처리가 실패된 상태 혹은, 
//오류가 발생한 상태
reject();
});
*/

function timeOut(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let count = n + 1;
      console.log(count);
      resolve(count);
    }, 1000);
  });
}

/*
timeOut(0).then(function(n)) {
  console.log('end')
}
*/

timeOut(0)
  .then((n) => {
    return timeOut(n);
  })
  .then((n) => {
    return timeOut(n);
  })
  .then((n) => {
    return timeOut(n);
  })
  .then((n) => {
    return timeOut(n);
  });
