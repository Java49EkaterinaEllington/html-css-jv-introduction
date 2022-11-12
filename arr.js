let arr = [8, 5 ,7, 3, 1, 5, 6 ,4, 5];

let min = arr => arr.reduce((a, b) => Math.min(a, b));
let max = arr => arr.reduce((a, b) => Math.max(a, b));
console.log("minimum:", min(arr));
console.log("maximum:", max(arr)); 


let ar = ["1_", "2", "3", "_a", "b"];
function deleteWithPrefix(strings, prefix) 
{
   return strings.filter(function(el, index) 
   {
        if(!el.includes(prefix))
        {
            return el;
        }
    })
}

console.log(deleteWithPrefix(ar, '_'))


let numbers = [8,5,7,3,1,5,6,4,5];

function getSortedEvenOdd(numbers)
{
    let evens = [];
    let odds = [];

    for(i = 0; i < numbers.length - 1; i++) 
    {
        (numbers[i] % 2 === 0) ? evens.push(numbers[i]) : odds.push(numbers[i]);
    }

    return [].concat.apply([], 
        [
        evens.sort((a, b) => b - a),
        odds.sort((a, b) => a - b)
    ]);
}

console.log(getSortedEvenOdd(numbers));