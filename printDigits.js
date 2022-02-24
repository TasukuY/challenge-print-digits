
let printDigits = num => {
    while(num > 0){
        let lastDigit = num%10;
        console.log(lastDigit);
        num = Math.floor(num / 10);
        //Another way to do a line above
        //num = (num - remainder) / 10.
    }
}

printDigits(923);

