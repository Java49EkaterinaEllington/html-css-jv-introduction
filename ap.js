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

const strings = checkString22.slice(0); 

for(let i = 0; i < checkString1.length; i++)
{
        let index = strings.indexOf(checkString11[i]);
        if(!~index)
        { 
          return false;
        } 
        else 
        {
          strings.splice(index, 1);
          console.log(strings.join());
        }
      }
      return true; 
    }
    console.log(isEqual(string1, string2));

   