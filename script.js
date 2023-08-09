// Variáveis para aplicar os resultados do teste. Não as altere.

const gender = process.argv[2]; // Sexo 
const height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**

// Configuração de conversão de medidas

const convertMeters = 1000;
const convertSeconds = 60;

// Configuração para o gênero Masculino

const maleGender = "male";
const maleHeight = 1.70;
let maleBarReps = 6;
let maleBarSeconds = 15;
let maleRunDistance1 = 3 * convertMeters;
let maleRunTime1 = 12 * convertSeconds;
let maleRunDistance2 = 5 * convertMeters;
let maleRunTime2 = 20 * convertSeconds;

// Configuração para o gênero Feminino

const femaleGender = "female";
const femaleHeight = 1.60;
let femaleBarReps = 5;
let femaleBarSeconds = 12;
let femaleRunDistance1 = 4 * convertMeters;
let femaleRunTime1 = 15 * convertSeconds;
let femaleRunDistance2 = 6 * convertMeters;
let femaleRunTime2 = 22 * convertSeconds;

// Configuração em comum para os dois gêneros
let standardAbs = 41;
const standardSwimDistance = 100;
let standardSwimTime = 1 * convertSeconds;
let standardDiveTime = 30;

if ((gender === maleGender) && // Verifica o genero
    (height >= maleHeight) && // Pelo menos 1,70 de altura
    (barReps >= maleBarReps || barSeconds <= maleBarSeconds) && //⁠ Pelo menos 6 repetições de barra ou no máximo 15 segundos de duração
    (abs >= standardAbs) && // ⁠⁠Pelo menos 41 abdominais
    ((runDistance >= maleRunDistance1 && runTime <= maleRunTime1) || // Pelo menos 3km em no máximo 12 min de corrida ou pelo menos 5km em no máximo 20 min de corrida
    (runDistance >= maleRunDistance2 && runTime <= maleRunTime2)) && 
    ((swimDistance >= standardSwimDistance && swimTime <= standardSwimTime) || diveTime <= standardDiveTime)) { // Pelo menos 100m em no máximo de 1 min de natação ou no máximo 30s de mergulho

    passed = true;
}

else if ((gender === femaleGender) && // Verifica o genero
    (height >= femaleHeight) && // Pelo menos 1,60 de altura
    (barReps >= femaleBarReps || barSeconds <= femaleBarSeconds) && // Pelo menos 5 repetições de barra ou no máximo 12 segundos de duração
    (abs >= standardAbs) && // Pelo menos 41 abdominais
    ((runDistance >= femaleRunDistance1 && runTime <= femaleRunTime1) || // Pelo menos 4km em no máximo 15 min de corrida ou pelo menos 6km em no máximo 22 min de corrida 
    (runDistance >= femaleRunDistance2 && runTime <= femaleRunTime2)) &&
    ((swimDistance >= standardSwimDistance && swimTime <= standardSwimTime) || diveTime <= standardDiveTime)) { // Pelo menos 100m em no máximo 1 min de natação ou no máximo 30s de mergulho 

    passed = true;
}

else {
    passed = false;
}

// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);
