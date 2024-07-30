class StringCalculator{

    add(numbers)
    {
        if(numbers === '')
            return 0;
        else{
            let sum = 0;
            numbers.split(',').forEach(val=>{
                sum += parseInt(val,10);
            });
        }
        return sum;
    }

 }
 module.exports = StringCalculator;