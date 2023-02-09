/*

///---------ответ на 1 вый задание-------////

45+35+30 = 110
110 - 90 = 20
90 - 20 = 70

70 человек всегда говорят правду 

///----------ответ на 2ой задание---------/////

9  8  5     абв
4  7  6     где
10 3  11    ёжз

да можна 
1) 9*8*5 = 360
2) 9*4*10 = 360
3) 8*7*3 = 168
4) 4*7*6 = 168
5) 5*6*11 = 330
6) 10*3*11 = 330

////-----------ответ на 3ый задание-------//////////

извиняюсь на эту время не хватила

////----------ответ на 4ый задание--------------////

х - все пирожки

х/3 + 2 + x/4 + 3 + x/5 + 8 = x
13 = x - x/3 - x/4 - x/5 
13 * 60 = 60x - 20x - 15x - 12x
780 = 13x
x = 60

в столовой есть 60 пирожков


*/



//---------Задача 1----------////

function toStr(arr){
    if (Array.isArray(arr)){
        let str = arr.toString() + '.'
    return str
    }
    return "It`s not an array"
}

//console.log(toStr(["moscow","sank-peterburg","moscow","sank-peterburg"]))

//--------Задача 2-------//
function Rounding(floatnumber){
    let x = floatnumber % 5
    if(x < 2.5){
        return floatnumber - x
    }else{
    return floatnumber + (5 - x) 
}
}

//console.log(Rounding(41.7))

// -------- Задача 4 -------//
function mynumberfunction(mynumber){
    let count = 0
    for(let i = 1; i <= mynumber ; i ++){
        if(mynumber%i == 0){
            count ++
        }
    }
    if (count > 2){
        return "chislo ne yavlyaetsiya prostim"
    }else{
        return "chislo yavlyaetsiya prostim"
    }
}
//console.log(mynumberfunction(20))

// -------- Задача 3 -------//

function addfunction(chislo){
    let x = chislo % 10
    let y = parseInt((chislo % 100) / 10)
    if ((x >=5 && x <= 9) ||  (x === "0") || ( x == 1 && y == 1) ||(x >= 2 && x <= 4 && y == 1)){
        return chislo + " компьютерoв"
    }
    if( x >= 2 && x <= 4 && y != 1){
        return chislo + " компьютерa" 
    }
    if(x == 1 && y != 1){
        return chislo + " компьютер"
    }
}
console.log(addfunction(12))

// -------- Задача 5 -------//

let massive1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
let massive2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

function firstFilter(mass) {
    let result=[];
    for(let value of mass){
        result[value] = (result[value]||0)+1;
    }
    let arr =[];
    for(let i in mass) {
        if ( result[ mass[i] ] > 1 ) {
        arr.push(mass[i]);
        result[ mass[i] ] = 0;
        }
    }
    return arr;
}

function secondFilter(mass1, mass2) {

    let updateMass1 = firstFilter(mass1);
    let updateMass2 = firstFilter(mass2);

    let i = updateMass1.length, j = updateMass2.length, resultMass = [];
    while (i > 0 && j > 0) {
    i--;
    j--;
    if (updateMass1[i] > updateMass2[j]) j++;
    else if (updateMass1[i] < updateMass2[j]) i++;
    else resultMass.push(updateMass1[i]);
    }
    return resultMass;
}

//console.log (secondFilter(massive1, massive2));
// -------- Задача 5 -------//
function multiplication(num){
    let free = " "
    for( let i = 1; i <= num; i++ ){
        free = free + " " + i ;
    }
    free = free + "\n"
    for( let i = 1; i <= num; i++ ){
        free = free + i
        for(let j = 1; j <= num; j++){
            free = free + " " + i*j;
        }
        free = free + "\n"
    }
    console.log(free)
}
multiplication(10)//я не смог найти алгаритм на этой "В каждом столбце числа должны быть выровнены по правому краю." условю.
