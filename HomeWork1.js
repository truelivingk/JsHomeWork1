
let findPrime = (...params) => {
    let state;
    params.forEach(item => {
        state = false;
        for (let index = 2; index < item; index++) {
            if(item%index==0){
                state = true;
                break;
            }
        }
        if(!state){
            console.log(item + ' sayısı asaldır');
        }
		else{
			console.log(item + ' sayısı asal değildir');
		}
		
    });
}

findPrime(2,5,8,21, 13); findPrime(3,5);






let friendNumbers = (number1,number2) =>{

    let sum;
    let numbers = [number1,number2];
    let resultNumbers = [];
    numbers.forEach(item => {
        sum=0;
        for (let index = 1; index < item; index++){
            if(item%index == 0){
                sum += index;
            }
        }
        resultNumbers.push(sum);
    });
    if(resultNumbers[0]== number2 && resultNumbers[1] == number1){
        console.log('Girilen 2 sayı arkadaş sayılardır')
        return;
    }
    console.log('Girilen 2 sayı arkadaş sayı değillerdir'); 
}

friendNumbers(220,284);






let perfectNumbersUpTo1000 = () => {
    
    let sum;
    let perfectNumberArray = [];
   for (let index = 1; index < 1000; index++) {
       sum = 0;
       for (let travelingNumber = 1; travelingNumber <= index; travelingNumber++) {
            if(index%travelingNumber == 0){
                sum += travelingNumber;
            }
       }
       if(index*2==sum){
        perfectNumberArray.push(index);
       }   
   }
   console.log(perfectNumberArray);
}
perfectNumbersUpTo1000();





let primeNumbersUpTo1000 = () => {
    let state;
    let primeArray = [];
   for (let index = 2; index < 1000; index++) {
       state = false;
       for (let travelingNumber = 2; travelingNumber < index; travelingNumber++) {
            if(index%travelingNumber == 0){
                state = true;
                break;
            }
       }
       if(!state){
        primeArray.push(index);
       }
       
   }
   // consolda tek tek gözükmesi yerine diziye attım tüm asal sayıları.
   console.log(primeArray);
}

primeNumbersUpTo1000();

