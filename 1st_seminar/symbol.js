const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1.description);
console.log(symbol1 === symbol2); 
// 두개는 같은 값을 가지는 심볼이지만 다른 것이라고 출력함
// Symbol로 인해서 서로 다른 것으로 인식됨

const includes = Symbol('커스텀 includes 함수');

// Array에 이 값이 포함되어있으면 true를 반환하는 기본 함수 = include
Array.prototype[includes] = function(){
    return 'its Symbol';
}

var arr = [1, 2, 3];
console.log(arr.includes(1));
console.log(arr['includes'](1));
console.log(arr[includes]());