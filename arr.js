let string = ["My", "name", "is", "Kate"]

function ulSurround(arr)
{
    let ularr = arr.map(function(element)
    {
        return "<li>"+element+"</li>";
    })
    
    ularr.splice(0, 0, "<ul>");
    ularr.push("</ul>");
    return ularr;
    
}

let newStr = ulSurround(string);

console.log(newStr);

//

let arr = [13,10,13,10,13,10];
let count = (arr) => 
{
  return arr.reduce(
    (acc, item) => (acc.set(item, (acc.get(item) || 0) + 1), acc),
    new Map ()
  );
};

console.log(count(arr));

//

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function Move(arr)
{
   return [].concat(arr.slice(-1),arr.slice(0,-1))
}

console.log(Move(arr))