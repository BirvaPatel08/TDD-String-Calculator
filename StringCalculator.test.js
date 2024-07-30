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
});

test('extra commas as part of input will return correct sum',()=>{
    expect(calculator.add('1,,2,4,,8,6')).toBe(21);
});

test('extra spaces as part of input will return correct sum',()=>{
    expect(calculator.add('1, 2, 4, 2')).toBe(9);
});

test('new lines introduced will return correct sum',()=>{
    expect(calculator.add('1\n2,3')).toBe(6);
})

test('custom delimiter as ; will return correct sum',()=>{
    expect(calculator.add('//;\n1;2')).toBe(3);
});