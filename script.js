const operator= prompt("Enter operator( either +,-,* or /):");
const num_1= parseFloat(prompt("Enter first number:"))
const num_2= parseFloat(prompt("Enter second number:"))
let result;
if(operator=="+"){
    result= num_1 + num_2;
}
else if( operator=="-"){
    result= num_1 - num_2;

}
else if( operator=="*"){
    result= num_1 * num_2;

}
else if( operator=="/"){
    result= num_1 / num_2;
}
alert (`${num_1} ${operator} ${num_2} = ${result}`);