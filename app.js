
// console.log("Hello world");
// for( i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i)
//     });
// }
i = 100;
// for (let i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) });
// } => 0 1 2

// for (var i = 0; i < 3; i++) {
//      console.log(i) ;
// }
// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }
// let op1 = 10;
// let op2 = 20;
// let res = sum(op1, op2);
// console.log(res)

//sum of all digits in a number 

function digitSum(number)
{
    let sum = 0, x;
while (number)
{
    x = number % 10;
    number = (number - x) / 10;
    sum += x;
} 
    return sum;
}
  console.log(digitSum(795.4));
