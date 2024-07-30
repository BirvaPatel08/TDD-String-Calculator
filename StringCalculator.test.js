const StringCalculator = require('./StringCalculator');

let calculator;
beforeEach(()=>{
   calculator = new StringCalculator();
})
test('empty strings as input will give 0',()=>{
    expect(calculator.add('')).toBe(0);
});

test('single number as input will return the number itself',()=>{
    expect(calculator.add('1')).toBe(1);
});

test('two numbers as input will return the sum',()=>{
    expect(calculator.add('2,4')).toBe(6);
});

test('multiple numbers as input will return the sum',()=>{
    expect(calculator.add('8,4,12,100')).toBe(124);
})