// var는 재선언이 가능하다.
// var vv = '123';
// console.log(vv);

// var vv = '321';
// console.log(vv);

// let은 재선언이 불가능하다.
// let ll = "123";
// let ll = "321"

// const는 재선언이 불가능하다.
// const cc = "123";
// const cc = '321';

// var는 재할당이 가능하다.
// var vv = '123';
// vv = '321';
// console.log(vv);

// let은 재할당이 가능하다.
// let ll = '123';
// ll = '321';
// console.log(ll);

// const는 재할당이 불가능하다.
// const cc = '123';
// cc = '321';
// console.log(cc);

// const를 상수 키워드로 보면 안된다.
// const obj = {

// };
// obj.name = '영훈';
// console.log(obj);

// var 는 function scope
// if(true){
//     var x = 'var';
// }
// console.log(`var: ${x}`);

// let은 block scope
// if(true){
//     let y = 'let';
// }
// console.log(`let: ${y}`); // y is not defined
// scope를 나가면서 유효 범위 밖으로 나간 것이다.

// var는 function scope
// function colorFunction(){
//     if(true){
//         var color = 'blue';
//         console.log(color); // blue 나옴
//     }
//     console.log(color); // blue 나옴
// }
// colorFunction();
// console.log(color); //  color is not defined

/**
 * var선언한 변수는 호이스팅이 된다.
 */

