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

test('negative numbers as input will throw exception',()=>{
    expect(()=>{calculator.add('1,-2,-3');}).toThrow('Negative numbers are not allowed: -2, -3');
});

test('numbers greater than 1000 will be ignored',()=>{
    expect(calculator.add('2000,4,8')).toBe(12);
});
test('numbers greater than 1000 will be ignored',()=>{
    expect(calculator.add('2000,2000')).toBe(0);
});

test('delimiters of any length will return correct sum',()=>{
    expect(calculator.add('//[***]\n1***2***3')).toBe(6);
});

test('Allowing multiple delimiters in input will return correct sum',()=>{
    expect(calculator.add('//[*][%]\n1*2%3')).toBe(6);
});

test('multiple delimiters of varying length will return correct sum',()=>{
    expect(calculator.add('//[**][%%]\n1**2%%3)')).toBe(6);
});

test('subtraction of two numbers will give correct value',()=>{
    expect(calculator.subtract('5,3')).toBe(2);
});

test('subtraction resulting in negative answer throws error',()=>{
    expect(()=>calculator.subtract('3,5')).toThrow('Result cannot be negative');
});

test('subtraction of multiple numbers',()=>{
    expect(calculator.subtract('5,3,1')).toBe(1);
});

test('subtraction with custom delimiter will throw error if result is negative',()=>{
    expect(()=>calculator.subtract('//;\n3;5')).toThrow('Result cannot be negative');
});

test('multiplication of numbers will give correct value',()=>{
    expect(calculator.multiply('2,3')).toBe(6);
});
test('multiplication of multiple numbers',()=>{
    expect(calculator.multiply('1,2,4')).toBe(8);
});

test('multiplication with custom delimiter will give correct value',()=>{
    expect(calculator.multiply('//[*][%]\n2*3%4')).toBe(24);
})
test('division of two numbers will give correct output',()=>{
    expect(calculator.divide('6,3')).toBe(2);
});

test('division of multiple numbers will give correct output',()=>{
    expect(calculator.divide('24,6,2')).toBe(2);
});

test('division by zero will throw error',()=>{
    expect(()=>calculator.divide('6,0')).toThrow('Division by zero exception');
});

test('division with custom delimiter will give correct output',()=>{
    expect(calculator.divide('//[*][%]\n24*2%2')).toBe(6);
})




