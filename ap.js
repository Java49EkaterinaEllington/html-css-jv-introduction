function createEmployee(id, name, birthYear, salary) 
{
    return {id, name, birthYear, salary};
}


function createRandomEmployees(nEmployees,idDigits, minSalary, maxSalary, minBirthYear,
   maxBirthYear) 
   {
       let employees = [];
       let uniqueIds = [0];
       minId = Math.pow(10,idDigits-1);
       maxId = Math.pow(10,idDigits);
       for(let i=0; i<nEmployees; i++)
        {
           let id = getUniqueRandomId(minId, maxId, uniqueIds)

           employees.push(createEmployee(id,'name'+id, getRandomIntegerValue(minBirthYear,maxBirthYear), getRandomIntegerValue(minSalary,maxSalary)));
       }
       return employees;
   }


   function getUniqueRandomId(minId, maxId, uniqueIds) 
   {
       let id = uniqueIds[0];
       do{
           id = getRandomIntegerValue(minId, maxId);
       }while(uniqueIds.includes(id))
       uniqueIds.push(id);
       return id;
   }


   function getRandomIntegerValue(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max-min)+min);
   }

   let allEmps = createRandomEmployees(5,13,25123,35478,1879,1997);
   console.log("task 1 ", allEmps);


   function getAverageAge(employees) 
   {
       let currentDateYear = (new Date()).getFullYear();
       return Math.round(employees.reduce((sum,empl) =>
       {
           return sum+currentDateYear-empl.birthYear;
       },0)/employees.length);
   }
   console.log("task 2 ", " averageAge=",getAverageAge(allEmps));

   function getEmployessBySalary(employees, minSalary, maxSalary) 
   {
       return employees.filter(empl => empl.salary > minSalary && maxSalary).sort((empl1,empl2) => empl1.salary - empl2.salary);
   }
   console.log("task3", getEmployessBySalary(allEmps, 11372,15670));

   
   function increaseSalary(employees, borderSalary, percent) 
   {
       return employees.map(employee => 
        {
           if(employee.salary < borderSalary) 
           {

               employee.salary += employee.salary*percent/100;
           }
           return employee;
       })
   }
   console.log("task4",increaseSalary(allEmps,2000,3));