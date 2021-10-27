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
    console.log(newNumber)
    randomNumbers.push(newNumber);
   }

console.log(randomNumbers);


//3.creare un alert che espone i 5 numeri.

alert(`${randomNumbers[0]}, ${randomNumbers[1]}, ${randomNumbers[2]}, ${randomNumbers[3]}, ${randomNumbers[4]}`);

//4.impostare un timeout: dopo  30 secondi eseguire il prompt.
let userNumbers = []; 


setTimeout(createPrompt (userNumbers), 5000);

//5. creare dei prompt dove l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente

function createPrompt (promptArray) {

    for (let i = 1; i <= 5; i++) { 

        let singleNumber = parseInt(prompt(`Inserisci il ${i} numero su 5 di quelli visualizzati`));
        promptArray.push(singleNumber);

       // promptArray.push(prompt(`Inserisci il ${i} numero su 5 di quelli visualizzati`)); 
        
      }
   return promptArray;
}

console.log(userNumbers);

//6. confrontare i 2 array di numeri : userNumbers e randomNumbers. individuare:
//6a. quanti numeri uguali hanno
//6b. quali sono i numeri uguali  




