let nothing = null;
console.log(`nothing: ${nothing}, type: ${typeof nothing}`)
// type = object EcmaScript의 오류로 인해, 원래는 null로 출력되어야 함

let x;
console.log(`x: ${x}, type: ${typeof x}`);

// null, undefined 비교
console.log('null vs undefined');
console.log('null === undefined', null === undefined)
// === : 동등연산자, 타입까지 같은지 비교한다.
console.log('null == undefined', null == undefined);
// == : 타입을 보지 않고, 그 자체의 값만 본다.

console.log('23 == "23"', 23 == "23")