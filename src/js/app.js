
// Наповнити масив на 10 000 елементів випадковими числами в діапазоні від 5 до 15. І знайти всі індекси числа 10 в цьому масиві.
/*створюємо масив в якому відображатимуться випадкові числа від 5 до 15
* створюємо цикл щоб повторити кількість операцій для заповнення ячейок 10000
* створюємо змінну для числа яке буде додаватися в масив
* в змінну округлюємо число всередену вставляємо генератор випадкових чисел який не задавши йому параметри генерує випадкове число від 0 до 1 з нецілих частин
* для зміни діапазону множимо на число в якому хочемо зробити діапазон в нашому випадку це 10  в результаті від 0 до 10
* наступне число вказує на обмеження з двох сторін +5 означає що до 0 додається 5 та до 10 додається 5 в результаті діапазон від 5 до 15*/

var arr  = [];

 for(var i = 0; i <10000;i++){
     var arrNumber=Math.round(Math.random()*10+5);
     arr.push(arrNumber); //додаємо число в кінець до створеного пустого масиву
}

var index = arr.indexOf(10);// створєємо змінну для пошуку числа 10
var indexes= [];///створюємо масив для відображення

while(index!== -1){
    indexes.push(index);
    index = data.indexOf(10,index+1);
}
console.log(indexes);