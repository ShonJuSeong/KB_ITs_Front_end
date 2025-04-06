// 전개연산자를 사용하여 아래 결과가 나오도록 배열을 정의하세요.
// ## Promise 객체 생성!
// 처리결과:  0.32435778048671526
// ## Promise 객체 생성!
// 오류 : 생성된 숫자가 0.8이상임- 0.811963599046789

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random(); //0~1사이의 난수 발생
    if (num >= 0.8) {
      reject("생성된 숫자가 0.8이상임 -" + num);
    }
    resolve(num);
  }, 2000);
});
p.then((result) => {
  console.log("처리 결과 : ", result);
}).catch((error) => {
  console.log("오류 : ", error);
});
console.log("## Promise 객체 생성!");
