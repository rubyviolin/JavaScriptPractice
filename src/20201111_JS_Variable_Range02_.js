function func() {
  const CONST_VALUE = "this is const variable";
  let let_value = "let function scope";
  var var_value = "var function scope";

  if (true) {
    const CONST_VALUE_IN_BLOCK = "this is const variable too";
    let let_value = "let block scope";
    var var_value = "var block scope";
    console.log(CONST_VALUE_IN_BLOCK);
    console.log(let_value);
    console.log(var_value);
  }
  console.log(CONST_VALUE);
  //console.log(CONST_VALUE_IN_BLOCK);
  console.log(let_value); // 큰 함수의 지역 변수
  console.log(var_value); // 작은 함수의 지역 변수
}

func();

// 변수의 호이스팅 : var는 후선언이 가능하여, 코딩이 복잡해 짐.
console.log(pre_defined_variable);
var pre_defined_variable = 10;

var pre_defined_value;
console.log(pre_defined_value);
pre_defined_value = 10;
