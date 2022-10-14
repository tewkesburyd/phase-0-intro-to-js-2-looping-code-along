// Code your solutions in this file

function writeCards(arrayOfStrings, event){
    const messege = [ ];
    for (let n = 0; n <= arrayOfStrings.length - 1; n += 1){
        messege.push(`Thank you, ${arrayOfStrings[n]}, for the wonderful ${event} gift!`);
    };
    return messege;
}

function countDown(num){
    while (num >= 0){
        console.log(num);
        num -=1;
    };
}