const emptyArray = [];
const numberArray = [1, 2, 3, 4];
const array = ['최영훈', 1, 5, 0, 0.1123, null, ]

/**
 * 1. 배열 선언하기
 * 배열은 객체이다.
 */
var arr1 = []; // 가장 많이 사용하는 방법
console.log(arr1);
console.log(typeof arr1);

var arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2)
console.log(typeof arr2)

var arr3 = ['최영훈', 1, 2, 3, null, {name: 'yh', age: 26}]
console.log(arr3)
console.log(typeof arr3)

// 여러 타입의 데이터가 하나의 배열에 들어갈 수 있다.

/**
 * 2. array prototype 메서드
 */
console.log('**** Array 기본 함수들을 알아보자 ****')
var arr = [1, 2, 3, 4];

// 2-1. length
console.log(`arr의 길이: ${arr.length}`);

// 2-2. push, pop
arr.push('new item');
console.log('arr push: ', arr);
arr.pop(); 
console.log('arr pop: ', arr); // new item

// 2-3. shift, unshift
// shift = 인덱스 0번 자리에 넣기
// unshift = // 인덱스 0번 자리에 있는 값 반환
arr.unshift('first item');
console.log('arr unshift: ', arr); 
arr.unshift('second item')
console.log('arr unshift: ', arr);

let shifted_value = arr.shift();
console.log('arr shift: ', arr);
console.log('shifted_value: ', shifted_value);

// 2-4. includes
// 배열에 요소 포함여부 반환
console.log('arr.includes(4): ', arr.includes(4));
console.log('arr.includes(100): ', arr.includes(100));

// 2-5. indexOf
// 요소의 인덱스 반환
// 존재하지 않는 요소는 -1 반환
console.log('arr.indexOf(4): ', arr.indexOf(4));
console.log('arr.indexOf(100): ', arr.indexOf(100));

// 2-6. concat
// 배열을 합쳐줌
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var concatArr = arr1.concat(arr2)
console.log('arr1.concat(arr2): ', concatArr);

// 2-7. join
// 입력을 구분자로 하여 배열을 문자열로 합침
var location = ["서울", "대전", "대구", "부산"];
console.log(location.join('-> '));

// 2-8. reverse
console.log(location.reverse())
console.log(location.reverse()
        .join('-> '));

// 2-9. sort
// localeCompare = 유니코드 기준으로 문자 정렬
// 요소 순서를 결정하는데 사용되는 함수를 넣음 sortFunction(sortFunction의 반환값을 가지고 요소를 정렬한다.)
// 함수의 첫번째 파라미터와 두번째 파라미터로 인자들이 차례대로 들어가서, 
// 첫번째 인수가 두번째 인수보다 작을 경우 sortFunction의 반환값이 -1이 되도록 해야한다.
// 두 인수가 같을 경우 sortFunction의 반환값이 0이 되도록 한다.
// 첫번째 인수가 두번째 인수보다 클 경우 sortFunction의 반환값이 1이 되도록 한다.
// 원배열이 정렬된다.
var countries = ['Österreich', 'Andorra', 'Vietnam'];
// 문자열 비교
console.log(countries.sort( (a, b) => a > b ? 1: -1)); // 제대로 정렬되지 않음
console.log(countries.sort( function(a, b){return a.localeCompare(b);})); // 제대로 정렬됨
// 숫자 비교
console.log('오름차순 정렬: ', concatArr.sort((a, b) => a - b));
console.log('내림차순 정렬: ', concatArr.sort(function(a, b){return b - a}));

// 2-10. filter
// 배열 요소 전체를 대상으로 조건을 걸어서, 조건을 만족하는 배열을 새로 생성하여 반환함
// sort()는 기존의 배열을 정렬함, sort()와 반대됨
var number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5]
var minusNumber = number.filter(item => item < 0);
console.log('minusNumber: ', minusNumber);

// 2-11. map 
// 배열 요소 전체를 대상으로 함수를 적용하여 그 결과를 새로운 배열로 생성하여 반함.
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
var countriesLengths = countries.map(item => item.length);
console.log('countriesLengths: ', countriesLengths);

// 2-12. reduce 
// reduce는 배열 요소를 함수를 적용하여 하나의 특정한 값으로 합쳐서 반환할 때 사용
// 대표적인 사용 예시 = 1~n 까지 더하기
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = number.reduce( (previousValue, currentValue) =>{
    console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
    return previousValue + currentValue;
});

console.log('sum = ', sum);

/**
 * 3. 배열 순회
 */
var serverPart = ["김현기", "석영현", "강준우", "송정우", "신지혜", "이영은", "이진호"];
let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. ';
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩만 불러주세요~'

for(let item in serverPart){
    serverIndexStr += item +'! ';
}
console.log(serverIndexStr)

for(let item of serverPart){
    serverPartMemberNameStr += item + '! ';
}
console.log(serverPartMemberNameStr)

serverPart.forEach(item =>{
    console.log(item);
});


