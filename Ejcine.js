function movie (tarjeta, boleto, descuento){
    let x = 1;
    let temp = boleto;
    let costboleto;
    let total = 0;


    while(true){

        costboleto = boleto * x;
        temp *= descuento;
        total += temp;

        if(costboleto > Math.ceil(total+tarjeta)){
            break;
        }
        x++;
    }
    return x;
}
console.log (movie(100, 10, 0.95));
