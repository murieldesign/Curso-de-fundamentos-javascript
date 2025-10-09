// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

let a = 0;
let b = 1;
let tem ;

console.log("los 10 primeros numeros de Fibonacci son:");

for(let i= 1; i<=10; i++){
    console.log(a);
    tem = a + b;
    a = b;
    b = tem;
}