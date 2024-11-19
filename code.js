const async = require('async');

function callback(count) {
    // console.log(count);
    return count;
}

async function aSync(arr, key, callback) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == key) {
            count++
        }
    }

    callback(count);
}

// let array = [1,2,3,4,1,4,1,2,3,2,2,2];
// let key = 1
// let key2 = 4
// let key3 = 2
// aSync(array, key2, callback); // 2
// aSync(array, key3, callback); // 5
// aSync(array, key, callback); // 3
