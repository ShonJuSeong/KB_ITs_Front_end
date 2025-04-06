// Proimise 체인을 사용하여 다음과 같은 결과가 나오도록
// 아래코드를 완성하세요.

//first!
//second
//third

let p = new Promise((resolve, reject) => {
  resolve("first!");
});
p.then((msg) => {
  console.log(msg);
  //throw new Error("##에러!!")
  return "second";
})
  .then((msg) => {
    console.log(msg);
    return "third";
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log("오류 발생 ==>  " + error);
  });
