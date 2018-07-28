let array = [];
function cercano(array,numeros){
    let a = 0;
    let min = 1000;
    let ans;
    for (a in array){
        let m = Math.abs(numeros-array[a]);
        if(m < min){
            min = m;
            ans = array[a];
        }
        return ans;
    }

}
console.log(cercano(array,88));
