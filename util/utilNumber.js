

export function getRandomNumber(min = 100000000, max = 999999999) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber

}



// return number with till 2 numbers after the dot
const formatNumber = (input) => {
    input =Number(input||0);
    
        const isDecimal = Number(input) !== NaN && isFinite(input);
        const decimalPlaces = isDecimal ? 2 : 0;
      
        if (typeof input === "string") {
          return input;
        } else {
          const formattedNumber = input.toFixed(decimalPlaces);
          const lastTwoDigits = formattedNumber.slice(-2);
          return lastTwoDigits === "00" ? Math.floor(input) : formattedNumber;
        }
      };
      
      const number = '123';
      const formattedNumber = formatNumber(number);
      
      console.log(formattedNumber); // 123
      
      const number2 = '234.3';
      const formattedNumber2 = formatNumber(number2);
      
      console.log(formattedNumber2); // 234.3
      
      const number3 = '23.333';
      const formattedNumber3 = formatNumber(number3);
      
      console.log(formattedNumber3); // 23.33
      
      const number4 = null;
      const formattedNumber4 = formatNumber(number4);
      
      console.log(formattedNumber4); // 333.33