// 비동기 처리를 하는 또 다른 방법
// async & await

function timeOut(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("start");
  await timeOut(2000); //awit는 async내에 사용가능. setTimeout과 직접 붙지 못 해서, 함수를 따로 만듦.
  console.log("end");
}

process();
