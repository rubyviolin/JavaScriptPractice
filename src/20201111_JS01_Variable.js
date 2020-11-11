/*
 * 변수의 영역(scope)
 * 1. 전역 변수
 * 2. 지역 변수(함수, 블록)
 *
 */

var globalVarVariable = "global use var";
let globalLetVariable = "global use let";
const globalConstVariable = "global const type";

function func() {
  console.log("===== CALL FUNC.======");

  // 함수 내에서 로컬 변수에 대한 접근
  var localVarVariable = "local use var";
  let localLetVariable = "local use let";
  const localConstVariable = "local const type";

  // 함수 내에서 전역변수와 동일한 이름의 지역변수를
  // 사용하는 경우에는 주의해야 합니다.
  // 전역변수를 사용할 수 없게 됩니다.
  var globalVarVariable = "not global use var";
  let globalLetVariable = "not global use let";
  const globalConstVariable = "not global const type";

  console.log(localVarVariable);
  console.log(localLetVariable);
  console.log(localConstVariable);

  console.log(globalVarVariable);
  console.log(globalLetVariable);
  console.log(globalConstVariable);
}
func();

//함수 밖에서 전역 변수에 대한 접근
console.log(globalVarVariable);
console.log(globalLetVariable);
console.log(globalConstVariable);

//함수 밖에서 지역 변수에 대한 접근
//console.log(localVarVariable); // Error

console.log("===============");
