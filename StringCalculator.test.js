const StringCalculator = require('./StringCalculator');

let calculator;
beforeEach(()=>{
   calculator = new StringCalculator();
})
test('empty strings as input will give 0',()=>{
    expect(calculator.add('')).toBe(0);
});