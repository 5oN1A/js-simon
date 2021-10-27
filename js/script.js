//1.creare una funzione che genera numeri random da 1 a 100

function randomGenerator (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

//2.creare un array con 5 numeri creati con random 

let randomNumbers = [];

   while (randomNumbers.length < 5) {
    let newNumber = randomGenerator(1, 100);
 //   console.log(newNumber)
    randomNumbers.push(newNumber);
   }

//console.log(randomNumbers);


//3.creare un alert che espone i 5 numeri.

alert(`${randomNumbers[0]}, ${randomNumbers[1]}, ${randomNumbers[2]}, ${randomNumbers[3]}, ${randomNumbers[4]}`);

//4.impostare un timeout: dopo  30 secondi eseguire il prompt.
let userNumbers = []; 


setTimeout(createPrompt (userNumbers), 5000);

//5. creare dei prompt dove l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente

function createPrompt (promptArray) {

    for (let i = 1; i <= 5; i++) { 

        let singleNumber = parseInt(prompt(`Inserisci ${i} numero su 5 di quelli visualizzati`));
        promptArray.push(singleNumber);

       // promptArray.push(prompt(`Inserisci il ${i} numero su 5 di quelli visualizzati`)); 
        
      }
   return promptArray;
}

//console.log(userNumbers);

//6. confrontare i 2 array di numeri : userNumbers e randomNumbers.
//6a. quali sono i numeri uguali --> creando un array che contiene i numeri in comune (matchingNumber)
//6b. quanti numeri uguali hanno --> contando il numero di valori che "matchingNumber" ha.

let matchingNumbers = [];


function findMatchingElement (arr1, arr2, arr3) {


  for(var i=0 ; i<arr1.length ; ++i) {

    for(var j=0 ; j<arr2.length ; ++j) {
      if(arr1[i] == arr2[j]) {    // If element is in both the arrays
        arr3.push(arr1[i]);        // Push to arr array
      }
    }
}
    return arr3;
}

console.log(findMatchingElement (randomNumbers, userNumbers, matchingNumbers));

