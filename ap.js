const string1 = ["magic", "cigam", "amgic"];
const string2 = ["igmac", "gamic", "agmic"];

function isEqual(string1, string2)
{
  const checkString1 = {};
  string1.forEach(element => 
  {
    if(checkString1[element])
    {
      checkString1[element]++;
    }
    else
    {
      checkString1[element] = 1;
    }
  });

  const checkString2 = {};
  string2.forEach(element =>
  {
    if(checkString2[element])
    {
      checkString2[element]++;
    }
    else
    {
      checkString2[element] = 1;
    }
  }  
    );

const checkString11 = Object.entries(checkString1);
const checkString22 = Object.entries(checkString2);

checkString11.length === checkString22.length && checkString11.sort().every(function(value, index) 
{ return value === checkString22.sort()[index]});
}
    console.log((isEqual(string1, string2)));

   