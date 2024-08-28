// Crie uma variável para armazenar seu nome completo
const meunome = "Davi Paulino Gomes";
console.log(meunome);
// Crie uma variável para armazenar se você gosta de programar (true ou false)
let eugostoDeProgramar = true; //ou false

// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável

//2 + (3 x 4) - 5
const a = 3
const b = 4
const c = 2
const d = 5
const e = c + (a * b) - d
console.log(e)

//2 x (3 + 4) - 5 ÷ 5
const f = 3
const g = 4
const h = 2
const i = 5
const j = 5
const k = h * (f + g) - i / j;
console.log(k)


//{[(10 - 4) / 2] * 3} + 1
const r = 10
const s = 4
const u = 2
const v = 3 
const w = 1
const x = ((r - s) / u) * v + w
console.log(x);

//3 * 4 / 2 + 1 - 5
const l = 3
const m = 4
const n = 2
const o = 1
const p = 5
const q = l * m / n + o - p;
console.log(q);


//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas
const titulo = "Poeminho do Contra"
console.log(`Poema: ${titulo}`);
const poemalinha1 = "Todos esses que aí estão Atravancando meu caminho,"
console.log(`${poemalinha1}`);
const  poemalinha2 = "Eles passarão...Eu passorinho!"
console.log(`${poemalinha2}`);

//Crie um programa que exiba a data atual formatada utilizando interpolação
const ano = "2024";
const mes = "08";
const dia = "26";
console.log(`${dia}/${mes}/${ano}`);


//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação
const base = 2;
const altura = 2;

const area = base * altura;
console.log(`A área do retângulo com base ${base} e altura ${altura} é ${area}`);

//Crie uma condicional para verificar se o caractere é uma vogal
const vogal = false
if(vogal){
    console.log("Verificar se F e uma vogal.");
} else{
    console.log("F não e uma vogal.");
}


//Crie uma condicional para verificar se o número é par ou é impar
function parOuImpar(numero) {

    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

let numero = 7;
let resultado = parOuImpar(numero);
console.log(`O número ${numero} é ${resultado}.`);


//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:


//Calcule a média do aluno e verifique se ele foi aprovado
// Notas do aluno
const nota1 = 8;
const nota2 = 7;
const nota3 = 6;

// Calcula a média
const media = (nota1 + nota2 + nota3) / 3;

// Verifica se foi aprovado
const status = media >= 7 ? "Aprovado" : "Reprovado";

// Exibe o resultado
console.log(`Média: ${media.toFixed(2)}`); // Exibe a média com 2 casas decimais
console.log(`Status: ${status}`); // Exibe se foi aprovado ou reprovado


// Crie uma variável para armazenar um array com seus hobbies
const meusHobbies = ['Skate', 'futebol', 'desenhar'];
console.log(meusHobbies);


/* 
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.*/
const frutas = ['maça', 'banana', 'goiaba', 'morango', 'abacate'];
console.log('Segundo elemento:', frutas[1]);
frutas.push('melancia','laranja');
frutas.shift()
console.log(frutas)

/* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/
let minhaidade = 18;
let tipodavariavel = typeof minhaidade;
console.log(tipodavariavel);



/* Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */

