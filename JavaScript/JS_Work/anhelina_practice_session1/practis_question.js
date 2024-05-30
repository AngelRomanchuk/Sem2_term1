// Author: Anhelina Romanchuk;  Date: May 10, 2024 

// Exercise 1
var label = "keyincollege";
var tld = "ca";
var domainName = label + "." + tld;
console.log(domainName);

// Exercise 2
var isKeyin;
if(domainName === "keyincollege.ca"){
    isKeyin = true;
} else{
    isKeyin = false; 
}
console.log(isKeyin);

// Exercise 3
var isNotKeyin;
if(isKeyin === true){
    isNotKeyin = false;
} else {
    isNotKeyin = true;
}
console.log(isNotKeyin);

// Exercise 4
var byte1 = 26;
var byte2 = 199;
var byte3 = 52;
var byte4 = 67;

// Exercise 5
ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4
console.log(ipAddress);

// Exercise 6
var number = 15;
for(let i=1; i<=10; i++){
    var table = i*table;
    console.log(`${number} * ${i} = ${table}`);
}

// Exercise 7
for(let i=1; i<=100; i++){
    if(i%2 !== 0){
        var num = "Odd number: " + i;
    }
    else {
        var num = "Even number: " + i;
    }
    console.log(num);
}

// Exercise 8 
var evenNumSum = 0;
for(let i=1; i<=100; i++){
    if(i%2 === 0){    
        evenNumSum += i;
    }
}
console.log(evenNumSum);

// Exercise 9
var perfectNum = 0;
var num = 6;
for(let i=1; i<num; i++){
    if(num%i === 0){    
        perfectNum += i;
    }
}

if(perfectNum === num){
    console.log(`${num} is a perfect number`)
} else {
     console.log(`${num} is not a perfect number`)
}


// Exercise 10
var number = 42;
var primeNumber = number;
var result = [];
f = 2;
var multiple = 1;

while(primeNumber > 1) {
    if (primeNumber%f ===0) {
        result.push(f);
        primeNumber/=f;
    } else {
        f++
    }
}

for (let i=0; i<result.length; i++) {
    multiple *= result[i];
}

if (number == multiple) {
    console.log(`${number} is a prime number`)
} else {
    console.log(`${number} is not a prime number`)
}

