class StringCalculator{

    add(numbers)
    {
        if(numbers === '')
            return 0;
            
        const {delimiter, normalizedNumbers} = this.parseInput(numbers);
        const parsedNumbers = this.parseNumbers(normalizedNumbers,delimiter);
        this.checkNegative(parsedNumbers);
        return this.sum(parsedNumbers);
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
                    .filter(val=>val<=1000);
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

                sum(numbers){
                    return numbers.reduce((a,b)=>a+b,0);
                }
            
    }

 
 module.exports = StringCalculator;