class StringCalculator{

    add(numbers)
    {
        return this.calculate(numbers,(a,b)=>a+b);
    }
    subtract(numbers)
    {
        return this.calculate(numbers,(a,b)=>{
            const result = a-b;
            if(result<0){
                throw new Error('Result cannot be negative');
            }
            return result;
        });
    }
    multiply(numbers)
    {
        return this.calculate(numbers,(a,b)=>a*b);
    }
    divide(numbers)
    {
        return this.calculate(numbers,(a,b)=>{
            if(b==0) 
                throw new Error("Division by zero exception");
            return a/b;
        });
    }
    calculate(numbers,operation)
    {
        if(numbers === '')
            return 0;
            
        const {delimiter, normalizedNumbers} = this.parseInput(numbers);
        const parsedNumbers = this.parseNumbers(normalizedNumbers,delimiter);
        this.checkNegative(parsedNumbers);
        return this.operate(parsedNumbers, operation);
}
        parseInput(numbers){
            let delimiter = /[\n,]+/;
            if(numbers.startsWith('//'))
            {
                const delimiterEnd = numbers.indexOf('\n');
                let customDelimiter = numbers.substring(2,delimiterEnd);
                if(customDelimiter.startsWith('[') && customDelimiter.endsWith(']')){
                    customDelimiter = customDelimiter.slice(1, -1);
                    customDelimiter = customDelimiter.split('][').map(val=>this.ignoreRegExp(val)).join('|');
                }
                else{
                    customDelimiter = this.ignoreRegExp(customDelimiter);
                }

                delimiter = new RegExp(customDelimiter, 'g');
                numbers = numbers.substring(delimiterEnd + 1);
            }
            return {delimiter, normalizedNumbers: numbers};
        }
            
                parseNumbers(numbers, delimiter)
                {
                    return numbers.split(delimiter).filter(val=>val.trim() !== '')
                    .map(val=>parseInt(val.trim(),10))
                    .filter(val=> !isNaN(val) && val<=1000);
                }

                checkNegative(numbers)
                {
                    const negatives = numbers.filter(num=>num<0);
                    if(negatives.length>0)
                    {
                        throw new Error(`Negative numbers are not allowed: ${negatives.join(', ')}`);

                    }
                }

                ignoreRegExp(string)
                {
                    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                }

               operate(numbers,operation){
                if(numbers.length === 0) return 0;
                return numbers.reduce((a,b)=>operation(a,b));
               }
            
    }

 
 module.exports = StringCalculator;