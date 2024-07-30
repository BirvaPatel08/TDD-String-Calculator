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
                delimiter = new RegExp(numbers.substring(2,delimiterEnd));
                numbers = numbers.substring(delimiterEnd+1);
            }
            return {delimiter, normalizedNumbers: numbers};
        }
            
                parseNumbers(numbers, delimiter)
                {
                    return numbers.split(delimiter).filter(val=>val.trim() !== '')
                    .map(val=>parseInt(val.trim(),10));
                }

                checkNegative(numbers)
                {
                    const negatives = numbers.filter(num=>num<0);
                    if(negatives.length>0)
                    {
                        throw new Error(`Negative numbers are not allowed: ${negatives.join(', ')}`);

                    }
                }

                sum(numbers){
                    return numbers.reduce((a,b)=>a+b,0);
                }
            
    }

 
 module.exports = StringCalculator;