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
            numbers.split(delimiter). filter(val=>val.trim() !== '').forEach(val=>{
                sum += parseInt(val.trim(),10);
            });

            return sum;
        }
      
    }

 }
 module.exports = StringCalculator;