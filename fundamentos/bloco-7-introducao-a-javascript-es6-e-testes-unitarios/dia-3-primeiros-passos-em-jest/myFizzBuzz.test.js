const myFiBz = require('./myFizzBuzz.js');

describe('Teste da função myFizzBuzz', () => {
    it('verifica se, de acordo com o parâmetro recebido, retorna o valor esperado', () => {
        expect(myFiBz(15)).toBe('fizzbuzz');
        expect(myFiBz(3)).toBe('fizz');
        expect(myFiBz(5)).toBe('buzz');
        expect(myFiBz(1)).toBe(1);
        expect(myFiBz('2')).toBe(false);
    })
})