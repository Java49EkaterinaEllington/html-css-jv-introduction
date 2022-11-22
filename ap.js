function isEqual(object1, object2) {
    const str1 = Object.getOwnPropertyNames(object1);
    const str2 = Object.getOwnPropertyNames(object2);
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    for (let i = 0; i < str1.length; i += 1) {
      const str = str1[i];
  
      if (object1[str] !== str2[str]) {
        return false;
      }
    }
  
    return true;
  }
  
  const object1 = 
  {
      word: 123
  };
  
  const object2 = 
  {
  word: 321
  };
  
  console.log(isEqual(object1, object2));