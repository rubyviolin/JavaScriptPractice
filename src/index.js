function func() {
  const CONST_VALUE = "this is const variable";
  let let_value = "let function scope";
  var var_value = "var function scope";

  if (true) {
    const CONST_VALUE_IN_BLOCK = "this is const variable too";
    let let_value = "block scope";
    var var_value = "block scope";
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

console.log(pre_defined_variable);
let pre_defined_variable = 10;
