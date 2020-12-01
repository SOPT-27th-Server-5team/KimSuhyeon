// const promise = new Promise((resolve, reject) => {
//     console.log('promise test')
// });
// 생성만 했는데도 로그가 찍혔다.
// 프로미스가 생성되면 생성되자마자 비동기  처리 로직이 실행된다.

const getNumber = new Promise((resolve, reject) => {
    console.log("getNumber Pending");
    setTimeout(() => {
        resolve(100); // resolove = 비동기 작업을 성공했을 때 값을 넘기는 함수 
    }, 1000)
});

// promise의 3가지 상태: fulfilled
// 성공했을 때
// reject : 실패했으 ㄹ때ㅏ
// pending


// then을 이용해서 값을 가져올 수 있다.
// 
// getNumber
//     .then(value => {console.log(value);
//         return value})
        
//     .then(value => {
//         console.log(value);
//         return value * 3
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(value, 1000);
//             })
//         })
//     })
//     .then(value => console.log(value))


// getNumber
//     .then(value =>{
//         console.log(value);
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value);
//         return value * 3
//     })
//     .then(value =>{
//         console.log(value);
//     }) // 

