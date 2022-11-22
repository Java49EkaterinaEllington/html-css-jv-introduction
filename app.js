const person =  {id: 123, name: 'Vasya', last_name: 'Ivanov', year: 2000,
 address: {city: 'Lod', street: 'Sokolov', app: 100}}; 
/// id - ключ. 123 - значение. name - ключ, Vasya - значение.
/// объект person - свойство(имя) id - его -значение- 123. 
/// address: {значения} - встроенный объект. 
/// в объекте даются свойства(информация), в массииве - индекс.

console.log(person.year)
/// выведет - 2000.

const name = "first_name";
console.log(person.name)
/// не будет работать, потому что у person нет ключа name.

const name2 = "first_name";
console.log(person[name2]);
/// [name2] - добираемся к полю, имя которого находится в переменной name2 - first_name из person.



const yearExp1 = "ye" + "ar"; /// - не будет работать, потому что в объекте нет yearExp.
console.log(person.year);
/// yearExp - переменная


const yearExp2 = "ye" + "ar";
console.log(person[yearExp2]);
/// будет работать, выйдет результат 2000. [] - выражение. [yearEx] - выражение, которое идет к "year", даже если написано "ye" + "ar";

/// пример как это в массиве:
const personArr = [123, 'Vasya', 'Ivanov', 2000, ['Lod', 'Sokolov', 100]];
console.log(personArr[3])
/// выйдет 2000 - потому что 3 по счету в массиве.


/// в качестве поля *объекта(ключа)* - строка из массива. *значение* - сколько раз эта строка повторялась в массиве.
function displayOccurrences(strings) /// массив строК.
{
    const occurrences = {}; /// пустой объект.
    /// массив строк. element - получаем строку.
    strings.forEach(element => 
        { 
        if (occurrences[element]) ///обращаемся к полю *объекта*. проверяем если объект существует. если объект существует: 
        {
            occurrences[element]++; ///  если *объект* существует, кладем в *occurrences[element]* единицу через *++*.
        }
        else 
        {
            occurrences[element] = 1; /// если нет, то объект равняется единице. новое свойство объекта, в котором новое значение - единица.
             /// этим мы говорим, что мы можем динамически добавлять поля во внутрь объекта. 
        }
    });
    console.log(occurrences);
}

/// const x = {};
/// const string = "abc";
/// x[string] = 1;
/// console.log(x);
///будет объект с одним полем с названием *abc(ключ)* и *значением 1*. { abc: 1 }

/// x[string]++;
/// console.log(x);
///{ abc: 2 }. то есть мы в значение - x[string] = 1; - увеличиваем на 1 через ++;


const strings = ['a', 'opr', 'lmn', 'abc', 'lmn', 'abc', 'lmn', 'lmn', 'abc', 'a'];
displayOccurrences(strings);
/// { lmn: 3, abc: 2, a: 1 } - ключ : количество значений.
/// { a: 2, opr: 1, lmn: 4, abc: 3 }




/// распечатать в отсортированон виде по убыванию встречаемости. 
/// взять первые три значения - методом фильтра, чтобы это сделать, надо получить массив пар - ключ-значение.
/// есть функции, чтобы получить *массив только ключей*, *только значений*, *массив пар*.

///------------------------------

const strings1 = ['a', 'opr', 'lmn', 'abc', 'lmn', 'abc', 'lmn', 'lmn', 'abc', 'a'];
displayOccurrences1(strings1);
/// массив пар и ключ и *значения*
function displayOccurrences1(strings1) 
{
    const occurrences1 = {}; /// пустой объект.
    /// массив строк. element - получаем строку.
    strings1.forEach(element => 
        { 
        if (occurrences1[element]) ///обращаемся к полю *объекта*. проверяем если объект существует. если объект существует: 
        {
            occurrences1[element]++; ///  если *объект* существует, кладем в *occurrences[element]* единицу через *++*.
        }
        else 
        {
            occurrences1[element] = 1; 
        }
    });

    const occurrencesAr = Object.entries(occurrences1); /// получаем массив массивов. можем отсортировать массив.
    occurrencesAr.sort((e1, e2) => e2[1] - e1[1])   /// sort - принимает функцию - два элемента и говорит какой больше и какой меньше.
    /// ((e1, e2) => e2[1] - e1[1]) - от частоты встречаемости e2[1] (который больше) мы отнимаем e1[1] (который меньше).
    /// e1, e2 - два массива. пример для себя: (a, z) => z[1] - a[1].  
    console.log(occurrencesAr); /// [ [ 'lmn', 4 ], [ 'abc', 3 ], [ 'a', 2 ], [ 'opr', 1 ] ] - получаем массив от большего значения к меньшему. 


   /// console.log(Object.entries(occurrences1));
   /// [ [ 'a', 2 ], [ 'opr', 1 ], [ 'lmn', 4 ], [ 'abc', 3 ] ] - массив массивов с первым эелементом - ключ, вторым элементом - значением.
   /// можем его отсортировать методом сорт.
}