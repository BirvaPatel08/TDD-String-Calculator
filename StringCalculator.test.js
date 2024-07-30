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
})