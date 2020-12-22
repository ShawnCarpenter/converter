export const fahrenheitToCelsius = (fahrenHeit: number) => Math.round((fahrenHeit-32)*(5/9)*100)/100

export const celsiusToFahrenheit = (celsius: number) => Math.round((celsius*(9/5)+32)*100)/100
