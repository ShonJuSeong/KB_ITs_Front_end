
var getTriangle = function(base, height){
    return (base * height)/2;
};

console.log('삼각형의 면적: ' + getTriangle(5, 2));


let getTriangle2 = (base, height) => {
    return (base*height)/2;
}

console.log('삼각형의 면적: ' + getTriangle2(5,2));


let getTriangle3 = (base, height) => (base*height)/2;

console.log('삼각형의 면적: ' + getTriangle3(5,2));
