
function numerosPares(n){
    let pares =[];
    for(let i = 0; i <= n; i++){
        if(i % 2 === 0) {
            pares.push(i);
        }
    }
    return pares
}

console.log( numerosPares(10));