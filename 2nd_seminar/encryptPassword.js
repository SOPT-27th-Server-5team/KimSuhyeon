const fs = require('fs');
const crypto = require('crypto');
const { resolve } = require('path');

/** promise로 구현 */
// function createSalt(size) {
//     return new Promise((resolve, reject) => {
//         crypto.randomBytes(size, (err, buf) => {
//             const salt = buf.toString('base64');
//             resolve(salt);
//         })
//     });
// }

// function encrypt(data, salt) {
//     return new Promise((resolve, reject) => {
//         crypto.pbkdf2(data, salt, 100000, 64, 'sha512', (err, key) => {
//             const cipher = key.toString('base64')
//             resolve(cipher)
//         })
//     });
// }

// function writeFile(data) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(`data`, data, () => {
//             resolve(console.log(`file(data) write completes)`));
//         });
//     });
// }

// const password = '123123';
// createSalt(64)
//     .then(salt => encrypt(password, salt))
//     .then(cipher => writeFile(cipher))

/** async await으로 구현 */
async function createSalt(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buf) => {
            const salt = buf.toString('base64')
            resolve(salt)
        })      
    })
};

async function encrypt(data, salt) {
    crypto.pbkdf2(data, salt, 100000, 64, 'sha512', (err, key) => {
        return key.toString('base64')
    })
}

async function writeFunction(data) {
    fs.writeFile(`async_await`, data, () => {
        console.log(`file(async_await) write completes`);
    });
}

async function main(input) {
    const salt = await createSalt(64)
    const cipher = await encrypt(input, salt)
    await writeFunction(cipher)
}

const password = '123123';
main(password)