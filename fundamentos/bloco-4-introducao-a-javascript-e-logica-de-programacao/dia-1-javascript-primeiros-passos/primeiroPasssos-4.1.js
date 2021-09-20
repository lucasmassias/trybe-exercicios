console.log("//////////4.1 variáveis //////////");
    let myName = 'Lucas Massias';
    let birthCity = 'Osasco';
    let birthYear = 1994;
    console.log(`Oi, meu nome é ${myName}, nasci em ${birthCity} no ano de ${birthYear}.`);

    console.log("//////////");    
    console.log("////////// 4.1 Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas //////////");
    let patientId = '50';
    let isEnrolled = true;
    const patientInfo = {
        firstName: 'Ana',
        lastName: 'Santos',
    };
    const patientEmail = 'ana@email.com';
    console.log(typeof patientId);
    console.log(typeof isEnrolled);
    console.log(typeof patientInfo);
    console.log(typeof patientEmail);
    console.log(typeof patientAge)
    console.log('Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.');
    let base = 5; let height = 8; let area = base * height; let perimeter = base + height * 2;
    console.log(`base: ${base}, height: ${height}, area: ${area}, perimeter: ${perimeter}`); 

    console.log("//////////");
    console.log('////////// 4.1 Condições If e Else //////////');
    let personGrade = 45.81;
    if (personGrade >= 80) {
        console.log("Parabéns, você foi aprovada(o)!");
    }
    else if (personGrade < 80 && personGrade >= 60) {
        console.log("Você está na nossa lista de espera");
    }
    else {
        console.log( "Você foi reprovada(o)");
    };
    
    console.log("//////////");
    console.log("////////// 4.1 Operadores lógicos ////////// ");
    // Operador AND
    console.log('retorno de operação do operador AND');
    let currentHour = 12.49; let message = '';

    if (currentHour >= 22) {
        message = 'Não deveríamos comer nada, é hora de dormir';
        console.log(message);
    }
    else if (currentHour >= 18 && currentHour < 22) {
        message = 'Rango da noite, vamos jantar :D';
        console.log(message);
    }
    else if (currentHour >= 14 && currentHour < 18) {
        message = 'Vamos fazer um bolo pro café da tarde?';
        console.log(message);
    }
    else if (currentHour >= 11 && currentHour < 14) {
        message = 'Hora do almoço!!!';
        console.log(message);
    }
    else if (currentHour >= 4 && currentHour < 11) {
        message = 'Hmmm, cheiro de café recém passado';
        console.log(message);
    }
    // Operador OR
    console.log('retorno de operação do operador OR');
    let weekDay = 'quarta-feira'
    if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
        console.log('"Oba, mais um dia de aprendizado na Trybe >:D".');
    }
    else if (weekDay === 'sabado' || weekDay === 'domingo') {
        console.log('FINALMENTE, descanso merecido UwU');
    }
    else {
        console.log('Dia inexistente');
    }
    // Operador NOT
    console.log('retorno de operação do operador NOT');
    console.log((2 + 2) === 4);
    /* Isso aqui deve nos retornar true , não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira.
    Agora, se adicionarmos o operador NOT antes dessa declaração? */
    console.log(!(2 + 2) === 4);
/* Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔
Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento.
Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente
fazendo !variável . Ou seja, false .Então, sabendo que o resultado original da operação ali em cima é true , 
quando a gente insere o operador NOT antes da operação, teremos o valor contrário a nossa resposta final,
que é false .
Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas
aos tipos primitivos booleanos. Podemos usar em: Strings... Números... Valores nulos... Valores indefinidos..
...e em muitos outros elementos. As possibilidades são enormes!!! */
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false / Strings...

console.log(!42); // false /  Números...

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true Valores nulos...

console.log(!undefined); // true / Valores indefinidos...

console.log("//////////");
console.log("////////// 4.1 Switch e Case //////////");
let statePerson = 'aprovada';
switch (statePerson) {
    case 'aprovada':
        console.log('aprovada');
        break;
    case 'lista':
        console.log('lista');
        break
    case 'reprovada':
        console.log('reprovada');
        break
    default:
        console.log('não se aplica');