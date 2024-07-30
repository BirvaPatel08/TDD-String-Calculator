class StringCalculator{

    add(numbers)
    {
        if(numbers === '')
            return 0;
        else{
            let sum = 0;
            numbers.split(','). filter(val=>val.trim() !== '').forEach(val=>{
                sum += parseInt(val.trim(),10);
            });
          

            return sum;
        }
      
    }

 }
 module.exports = StringCalculator;