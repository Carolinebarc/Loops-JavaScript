const prompt = require("prompt-sync")();

let i = 0;
let qC = 0;
let qMN = 0;
let qOc = 0;
let qHA=0;
let qN40 = 0;
let qC18 = 0;


while (i < 3) {
    const idade = parseInt(prompt(`escreva sua idade `));
    console.log(`Seu gênero, entre: `);
    console.log(`1--Homem\n`);
    console.log(`2--Mulher\n`);
    console.log(`3--Outro\n`);
    const sx = parseInt(prompt('Escolha a opção de gênero'));
    console.log(`Escolha um humor entre`);
    console.log(`1-Calmo\n`);
    console.log(`2-Nervoso\n`);
    console.log(`3-Agressivo\n`);
    const humorString = (prompt(`Escolha a opção de humor`));
    const humor = Number(humorString);

if(humor == 1){
        qC++;
    }

if(sx== 2 && humor==2){
        qMN++
    }
 if(sx== 1 && humor==1){
        qOc++;
    }
 if (humor==3 && sx ==1){
        qHA++
    }
    if (humor==2 && idade>40){
        qN40++
    }
if(humor==1 && idade <18){
        qC18++
 }

    i++;
}
console.log(`\n pessoas calmas é ${qC}`);
console.log(`\n mulheres nervosas é ${qMN}`);
console.log(`\n de OUTROS calmes é ${qC}`);
console.log(`\n de homens agressivos é ${qC}`);
console.log(`\n nervosas acima dos 40 anos é ${qN40}`);
console.log(`\n pessoas calmas acima dos 18 é ${qC18}`);