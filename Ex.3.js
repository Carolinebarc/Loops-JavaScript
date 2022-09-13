const prompt = require('prompt-sync')();


let i = 0;
let j = 0;
let v = 0;


while (i >= 0) {
    i = parseInt (prompt(`Coloca a idade  `));
    
    if   (i<21){
        j++
    }
    
    else if (i > 50) {
        v++
    }
}
console.log(`O total de pessoas com menos de 21 anos é de: ${j}`)
console.log(`E com mais de 50 anos é de ${v}`)