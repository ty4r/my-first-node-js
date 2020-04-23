'use strict'; /*strictモード(厳格モード) */
const number = process.argv[2] || 0; /*左がTrusyなら左を、左がFalsyなら0を*/
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);