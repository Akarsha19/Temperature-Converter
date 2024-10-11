alert('Hello, enter the temperature you would like to convert to celcius.')

//create function
const celciusTemp = () => {       //put in conversion
  alert((fahrenheitTemp - 32) * (5 / 9));
}
//prompt for value 
const fahrenheitTemp = prompt("Enter temperature");
//turn it into number to use in equation
const fahrenheitTempNum = Number(fahrenheitTemp);
//return function

celciusTemp();
//start if else

//function describeWeather
const describeWeather = () =>
  fahrenheitTemp;
if (fahrenheitTemp < 32) {
  alert('very cold')
} else if (fahrenheitTemp > 32 && fahrenheitTemp < 64) {
  alert('cold')
} else if (fahrenheitTemp > 64 && fahrenheitTemp < 86) {
  alert('warm')
} else if (fahrenheitTemp > 86 && fahrenheitTemp < 100) {
  alert('hot')
} else if (fahrenheitTemp >= 100) {
  alert('very hot');
}

//tried return, switched to alert messages and it worked.
describeWeather();
