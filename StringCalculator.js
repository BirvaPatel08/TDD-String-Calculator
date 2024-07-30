class StringCalculator{

    add(numbers)
    {
        if(numbers === '')
            return 0;
        else{
            let delimiter = /[\n,]+/;
            if(numbers.startsWith('//'))
            {
                const delimiterEnd = numbers.indexOf('\n');
                delimiter = new RegExp(numbers.substring(2,delimiterEnd));
                numbers = numbers.substring(delimiterEnd+1);
            }
            let sum = 0;
            let negatives = [];
            numbers.split(delimiter). filter(val=>val.trim() !== '').forEach(val=>{
                 const number = parseInt(val.trim(),10);

                 if(number<0)
                 {
                    negatives.push(number);
                 }
                 sum += number;
            });
            
            if(negatives.length > 0)
            {
                throw new Error(`Negative numbers are not allowed: ${negatives.join(', ')}`);
            }

            return sum;
        }
      
    }

 }
 module.exports = StringCalculator;