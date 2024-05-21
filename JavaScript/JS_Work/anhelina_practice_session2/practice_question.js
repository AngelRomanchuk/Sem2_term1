// Author: Anhelina Romanchuk;  Date: May 21, 2024

// Exercise 1
function circleArea(r) {
    let area = 3.14*r*r;
    return area
}
console.log(circleArea(2));

// Exercise 2
function diceRoll(sides = 6) {
    let dice = Math.floor(Math.random() * sides) + 1;
    console.log(dice);
}
diceRoll(20);

// Exercise 3
function convertCtoF(celsius) {
    let fahrenheit = (9/5 * celsius) + 32;
    return fahrenheit;
}
console.log(convertCtoF(32));

// Exercise 4
function convert(temp, flag) {
    if(flag == "C"){
        let fahrenheit = (9/5 * temp) + 32;
        console.log(`fahrenheit ${fahrenheit}`)
    } else {
        let celsius = ((temp - 32) * 5) / 9;
        console.log(`celsius ${celsius}`);
    }
}
convert(122, "F");
convert(50, "C");

// Exercise 5
function isTrue(...number) {
    condition = 0;
    for(i=0; i<number.length; i++) {
        if(number[i]<50) {
            continue
        } else {
            condition += 1;
        }
    }

    if(condition===0){
        return true;
    } else {
        return false;
    }
}
console.log(isTrue(1,2,52,3));


// Exercise 6
function sum(...number){
    let listSum = 0;
    for(i=0; i<number.length; i++){
        listSum += number[i];
    }
    return listSum;
}
console.log(sum(1,2,3));

// Exercise 7
function ifMultiple(number) {
    let divide = number/3;
    if(divide%1===0){
        return true;
    } else {
        return false;
    }
}
console.log(ifMultiple(7));

// Exercise 8
function discount(total, discount){
    let money = total;
    if(discount != undefined) {
        money = total - (total * (discount/100));
    }
    return money
}
console.log(discount(56,10));
console.log(discount(24));

// Exercise 9
function time(seconds){
    let days = Math.floor(seconds / (24*60*60));
    let hours = Math.floor((seconds % (24*60*60)) / (60*60));
    let minutes = Math.floor((seconds % (60*60)) / 60);
    console.log(`${days} Days, ${hours} Hours, ${minutes} Minutes`);
}
time(2451692);

// Exercise 10
function time(seconds){
    let days = Math.floor(seconds / (24*60*60));
    let hours = Math.floor((seconds % (24*60*60)) / (60*60));
    let minutes = Math.floor((seconds % (60*60)) / 60);

    if(hours===0 && minutes===0){
        console.log(`${days} Days`);
    } else if(days===0 && minutes===0){
        console.log(`${hours} Hours`);
    } else if(hours===0 && days===0){
        console.log(`${minutes} Minutes`);
    } else if(minutes===0) {
        console.log(`${days} Days, ${hours} Hours`);
    } else if(hours===0) {
        console.log(`${days} Days, ${minutes} Minutes`);
    } else if(days===0) {
        console.log(`${hours} Hours, ${minutes} Minutes`);
    } else {
        console.log(`${days} Days, ${hours} Hours, ${minutes} Minutes`);
    }
}
time(86400);
