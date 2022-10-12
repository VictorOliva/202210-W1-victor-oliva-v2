
/////////////////////* EJERCICIO 1: CALULADORA */////////////////////
/*
let numero1 = +prompt("Introduce el primer número");
let numero2 = +prompt("Introduce el segundo número");

while(isNaN(numero1) || isNaN(numero2)){
    alert("Has introducido letras, por favor introduce un número válido");
    numero1 = +prompt("Introduce el primer número");
    numero2 = +prompt("Introduce el segundo número");
};

calculadora = () => {
    console.log(resultado = "La suma es:" +(numero1+numero2).toFixed(3));
    console.log(resultado = "La resta es:" +(numero1-numero2).toFixed(3));
    console.log(resultado = "La multiplicación es:" +(numero1*numero2).toFixed(3));
    console.log(resultado = "La división es:" +(numero1%numero2).toFixed(3));  
};

if(numero1 === 0 && numero2 != 0){
    console.log(Math.sqrt (numero2).toFixed(3));
} 

if(numero2 === 0 && numero1 != 0){
    console.log(Math.sqrt (numero1).toFixed(3));
} 

if (numero1 != 0 && numero2 != 0){
    calculadora();
}

/////////////////////* EJERCICIO 2: CALULADORA PRO */////////////////////
/*
let numeros = [];

do {
    numero = +prompt("Introduce un número");
    numeros.push(numero); 
} while (numero != 0);
numeros.pop ();

calculadora = () => {
let suma = (accumulator, value) =>  accumulator + value;
let resta = (accumulator, value) =>  accumulator - value;
let multiplicacion = (accumulator, value) =>  accumulator * value;
let division = (accumulator, value) =>  accumulator / value;
console.log("Suma: " + numeros.reduce(suma) + "; Resta: "+ numeros.reduce(resta) +"; Multiplicación: " + numeros.reduce(multiplicacion) +" ; División: "+ numeros.reduce(division));
}

calculadora(); 

for (i= 0; i<= numeros.length; i++){
    numeros.pop();
}

let respuesta = prompt("¿Quieres volver a realizar otra operación (s/n)");

if( respuesta === "n" || respuesta === "N"){
    console.log("Bye!")
} else {
    
    do {
        numero = +prompt("Introduce un número");
        numeros.push(numero); 
    } while (numero != 0);
    numeros.pop ();
    calculadora(); 

}

/////////////////////* EJERCICIO 3: AIRLINES *////////////////////
/*
let flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const askForNameAndGreet = () =>{
    const name = prompt("what's your name?");
    console.log(`Hi ${name}`);
}

const showFlights = () => {
    console.log("****Here you have all the avaibles flight****");
    flights.forEach(flight => {
        if(flight.scale){
            console.log(`El vuelo con origen: ${flight.from} , y destino: ${flight.to} ,tiene un coste de ${flight.cost} € y realiza escala`)   
        }else{
            console.log(`El vuelo con origen: ${flight.from} , y destino: ${flight.to} ,tiene un coste de ${flight.cost} € y no realiza escala`)
        };
    });
};

const averageFlightCost = () =>{
    console.log("**********************")
    const sum = flights.reduce((sum,{cost}) => sum + cost,0);
    console.log("The average flight cost is: " +sum/flights.length)
}

const showFlightWithScale = () => {
    console.log("**********************")
    console.log("This are the flights with scale")
    flights.forEach(flight => {
        if(flight.scale){
            console.log(`El vuelo con origen: ${flight.from} , y destino: ${flight.to} , realiza escala`)   
        };
    });
}

const lastFiveFlightOfTheDay = () =>{
    console.log("****Here you have the last 5 flights of the day ****");
    flights.forEach(flight => {
        if(flight.id >4){
            console.log(`Vuelo con destino: ${flight.to}`)   
        };
    });
}

askForNameAndGreet();
showFlights();
averageFlightCost();
showFlightWithScale();
lastFiveFlightOfTheDay();


/////////////////////* EJERCICIO 4 : AIRLINES PRO */////////////////////
/*

let flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let role = prompt ("Whats your role (admin/user)?")

const showFlights = () => {
  console.log("****Here you have all the avaibles flight****");
  flights.forEach(flight => {
      if(flight.scale){
          console.log(`El vuelo id ${flight.id} con origen: ${flight.from} , y destino: ${flight.to} ,tiene un coste de ${flight.cost} € y realiza escala`)   
      }else{
          console.log(`El vuelo id ${flight.id} con origen: ${flight.from} , y destino: ${flight.to} ,tiene un coste de ${flight.cost} € y no realiza escala`)
      };
  });
};

const askForRole = () => {
  if(role === "user"){
      findFlightByPrice();
      return;
  };
  if(role === "admin"){
      adminAction();
      return;
  };
  if(role === null){
      alert("Bye Baby!");
      return;
  };
  
  if(role !== "user" || role !== "admin" || role !== null){
      alert("No has introducido un usuario válido, Bye!")
  };
};

const askForAdminAction = () => {
  const action = prompt(
    "What do you want to do? Create a flight or delete a flight? (create/delete)"
  );
  if (!action) {
    return;
  } else if (
    action.toLowerCase() !== "create" &&
    action.toLowerCase() !== "delete"
  ) {
    alert("Please insert a valid action");
    adminAction();
  } else {
    return action.toLowerCase();
  }
};

const adminAction = () => {
  const action = askForAdminAction ();
  if (action === "create"){
      for(i = 0; i<= 15; i++) {
      showFlights();
      const newFlight = {};
      newFlight.to = prompt("To:");
      if(!newFlight.to){
        alert("Carefull you did not added a To:");
        return adminAction();
      } 
      newFlight.from = prompt("From:");
      if(!newFlight.from){
        alert("Carefull you did not added a From:");
        return adminAction();
      }
      newFlight.cost = +prompt("Cost:");
      if(!newFlight.cost){
        alert("Carefull you did not added a cost:");
        return adminAction();
      }
      newFlight.id = flights.length;    
      flights.push(newFlight);
      const addNewFlight = confirm("Flight added perfectly! - Do you want to add a new flight?")
      if(!addNewFlight) {
        return;
      }
      if(flights.length >= 25){
      alert("you have reach the limit of 15 flights");
      return;
      }  
      }
    
      showFlights();
  };

  if(action === "delete"){
  showFlights();
  const idToDelete = +prompt("Insert Flight ID to delete");
  flights = flights.filter((flight) => flight.id !== idToDelete);
  console.log("**** Here you have the flight updated ****");
  showFlights();
  };

};

const findFlightByPrice = () => { 
  let price = prompt("Please, introduce a price to filter");
  flights = flights.filter((flight) => flight.cost <= price);
  showFlights();  
  return;
};

askForRole();

/////////////////////* EJERCICIO 5: BINGO */////////////////////
/*
let rounds = 0;
let countLine = 0;
let won = false;
let isPlaying = true;
const usedNumbers =[];
const bingoUsedNumbers = [];
const numberToGuess =[];
let bingoCartonNumbers = [];
const randomNumber = Math.floor(Math.random() * 90 + 1); 


const bingoCard = [
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  //next line
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  //next line
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
];


const askPlayerName = () => {
  const playerName = prompt("Dinos por favor tu nombre");
  if(!playerName){
   askPlayerName ();
  }
  alert(`Bienvenido al BingoooO! ${playerName} \n Comencemos a Jugar 🎲!  `);
}

const getRandomNumbers = () =>{
  const randomNumber = Math.floor(Math.random() * 90 + 1);  
  if(usedNumbers.includes(randomNumber)){
  return(getRandomNumbers());
  }
  usedNumbers.push(randomNumber);
  return(randomNumber);
}

const generateNumbersCard = () =>{
  const randomNumber2 = Math.floor(Math.random() * 90 + 1);
  if(bingoCartonNumbers.includes(randomNumber2)){
    return(generateNumbersCard());
  }
  bingoCartonNumbers.push(randomNumber2);
  return(randomNumber2) 
}

const generateNumbersBingoCard = () =>{
  for (let i = 0; i < bingoCard.length; i++) {
   generateNumbersCard(i)
    numberToGuess.push({ number: bingoCartonNumbers[i], matched: false })
  }
  console.table(numberToGuess, ["number"])
}

const newTurn = () => {
  const randomNumber = getRandomNumbers();
  alert(`Tu número es ${randomNumber}!`);
  bingoUsedNumbers.push(randomNumber);
  numberToGuess.forEach((bingoNumber) => {
    if (bingoNumber.number === randomNumber) {
      bingoNumber.number = bingoCard.number = 'X';
      bingoNumber.matched = true;
      alert(`Has acertado el número ${randomNumber}!`);
    }
  }
  )
  rounds++;
}

const checkIfWin = () => {
  for (let i = 0; i < numberToGuess.length; i++) {
    if (numberToGuess[i].matched === false) {
      return;
    }
  }
    won = true;
  return;
};

const checkLine = () => { 
  if(bingoUsedNumbers.includes(bingoCartonNumbers[0]) && bingoUsedNumbers.includes(bingoCartonNumbers[1]) && bingoUsedNumbers.includes(bingoCartonNumbers[2]) && bingoUsedNumbers.includes(bingoCartonNumbers[3]) && bingoUsedNumbers.includes(bingoCartonNumbers[4])) {
    countLine++;
  }
  if(bingoUsedNumbers.includes(bingoCartonNumbers[5]) && bingoUsedNumbers.includes(bingoCartonNumbers[6]) && bingoUsedNumbers.includes(bingoCartonNumbers[7]) && bingoUsedNumbers.includes(bingoCartonNumbers[8]) && bingoUsedNumbers.includes(bingoCartonNumbers[9])) {
    countLine++;
  }
  if(bingoUsedNumbers.includes(bingoCartonNumbers[10]) && bingoUsedNumbers.includes(bingoCartonNumbers[11]) && bingoUsedNumbers.includes(bingoCartonNumbers[12]) && bingoUsedNumbers.includes(bingoCartonNumbers[13]) && bingoUsedNumbers.includes(bingoCartonNumbers[14])) {
    countLine++;
  }

  console.log(countLine); 

  if(countLine === 1){
    alert('Vamos señ@res han cantado línea y seguimos para Bingoo!!!!');
    console.log('Vamos señ@res han cantado línea y seguimos para Bingoo!!!!')
  }
};


const checkIfWon = () => {
  if (won) {
    alert('Acabas de hacer Bingo!');
    alert(`Has ganado en ${rounds} rondas`);
  } return;
};

const playAgain = () => {
  
  if (confirm('Quieres jugar otro cartonzito 🎲?')) {
    numberToGuess.length = 0;
    usedNumbers.length = 0
    won = false;
    let rounds = 0
    let countLine = 0
    generateNumbersBingoCard();
    do {
      if (confirm(`Quieres un numerito 🎲??`)) {
        newTurn();
        checkIfWin();
        checkLine();
        console.table(numberToGuess, ["number"]);
      } else {
        isPlaying = false;
      } 
    } while (!won && isPlaying);
    checkIfWon();
    playAgain();
  } else {
    alert(`Nos vemos pronto!`);
    return;
  }
}

const newGame = () => {
  generateNumbersBingoCard()
  do {
    if (confirm(`Quieres un numerito 🎲??`)) {
      newTurn();
      checkIfWin();
      checkLine();
      console.table(numberToGuess, ["number"]);
    } else {
      isPlaying = false;
    } 
  } while (!won && isPlaying);
  checkIfWon();
  playAgain();
}

askPlayerName ();
newGame();
*/
/////////////////////* EJERCICIO 6: PASAPALABRA */////////////////////

/*Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, 
deberá indicarle al usuario cuantas letras ha fallado y cuantas ha acertado. Si el usuario responde con "pasapalabra" 
el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, 
la dejará para la siguiente ronda. El juego deberá, cuando finalize, mostrar un ranking de usuarios con el nombre y ordenados por cantidad
de letras acertadas.


const questions = [
	{letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien")},
	{letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")},
	{letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")},
	{letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
	{letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")},
	{letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad")},
	{letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas")},
	{letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento")},
	{letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano")},
	{letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba")},
	{letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria")},
	{letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo")},
	{letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas")},
	{letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia")},
	{letter: "ñ", answer: "señal", status:0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.")},
	{letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien")},
	{letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft")},
	{letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche")},
	{letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor")},
	{letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático")},
	{letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984")},
	{letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914")},
	{letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa")},
	{letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso")},
	{letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética")},
	{letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos")},
	{letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional")},
];

isPlaying = true;
won = false;
correctAnswers = 0;
failAnswers = 0;
usedWords = [];
usedWrongWords = [];
const playersRanking = [];


const askPlayerName = () => {
  const playerName = prompt("🖐 Hola, antes de empezar por favor dime tu nombre");
  if(!playerName){
   return askPlayerName();
  }
  alert(`Bienvenido a Pasapalabra! ${playerName} \n Comencemos a Jugar 🎲!  `);
  return(playerName);
};

const getWord = (playerName) => {
  const newWord = prompt(`¿Cuál es tu respuesta ${playerName}?`);
  if(newWord === null){
    alert(`Sayoranara ${playerName} 👋`);
    return;
  }
  if(!newWord){
    alert(`🙀 parece que no has introducido una palabra`);
   return getWord();
  }
  return newWord.toLowerCase();
};

const checkWord = (playerWords, questions) => {
  if(playerWords === "pasapalabra"){
    alert("Pasamos Palabra ⏸");
    questions.status = 11
    return;
  }
  if(!playerWords.includes(questions.letter)){
    alert(`Vaya la palabra no tiene la letra del rosco que es la ${questions.letter} te llevas un 🔴!!!!`);
    questions.status = 2
    usedWrongWords.push(playerWords);
    failAnswers++;
    return;
  }
  if(!playerWords.includes(questions.answer)){
    alert("💩, No has acertado y te llevas un 🔴!!!!");
    questions.status = 2
    usedWrongWords.push(playerWords);
    failAnswers++;
    return;
  }
  if(playerWords.includes(questions.answer)){
  alert(`Has acertado 👌 la palabra ${questions.answer} y te llevas un 🟢`)
  questions.status = 1
  correctAnswers ++;
  usedWords.push(playerWords);
  return;
  }
}

const wordToGuess = (questions, playerName) => {
  for(let i = 0; i < questions.length; i++) {
    if(questions[i].status === 0){
      alert(questions[i].question);
      const word = getWord(playerName);
      checkWord(word, questions[i], playerName)
    }
    if (questions.every((elem) => elem.status !== 0)) {
      won = true
      alert(`🎊 Enhorabuena has acabado una vuelta y esta es tu lista de aciertos => ${usedWords.join(", ")} \n y esta tu lista de fallos => ${usedWrongWords.join(", ")} ` );
      playersRanking.push({Nombre: playerName , score: correctAnswers});
    }
  }
  for(let i = 0; i < questions.length; i++) {
    if(questions[i].status > 10){
      alert(`⏪ Vamos a por las que marcamos como pasapalabra \n ${questions[i].question}`);
      const word = getWord(playerName);
      checkWord(word, questions[i], playerName)
      if(questions[i].status === 0){
        alert(questions[i].question);
        const word = getWord(playerName);
        checkWord(word, questions[i], playerName)
      }
      if (questions.every((elem) => elem.status > 0 && elem.status < 10)) {
        won = true
        alert(`🎊 Enhorabuena has acabado una vuelta y esta es tu lista de aciertos => ${usedWords.join(", ")} \n y esta tu lista de fallos => ${usedWrongWords.join(", ")} ` );
      }
    }
  }

}

const ranking = () => {
  playersRanking.sort((a,b) => { return(b.score - a.score)});
  console.table(playersRanking);
}

const game = () => {
  const playerName = askPlayerName();
  do {
    wordToGuess(questions, playerName)
    if (confirm(`Gracias ${playerName} ¿Hay algún jugador@ valiente más que quiera enfrentarse al Pasapalabra? 😍`)) {
      correctAnswers = 0;
      failAnswers = 0;
      isPlaying = true;
      won = false;
      usedWords = [];
      usedWrongWords = [];
      for(let i = 0; i < questions.length; i++) {
        questions[i].status = 0
      }
      game();
      return;
    } else {
      alert("A continuación te enseñaremos el Ranking de Jugadores!, Nos vemos pronto 👋")
      isPlaying = true;
      won = false;
      return;
    }
  } while(!won && !isPlaying);
};

game();
ranking();
*/
/////////////////////* EJERCICIO 7: CALCULADORA HTML */////////////////////

/*Implementa a tu Calculadora Calculadora && Calculadora PRO una interfaz gráfica con HTML 
y estilízala con CSS, añade la lógica reformulando tu JS..*/


class Calculator {
  
  numeros = [];
  
  constructor() {
    this.generateNumbers ()
    this.newOperation ()
  }
  
  generateNumbers() {
   do {
    this.numero = +prompt("Introduce un número");
    this.numeros.push(this.numero); 
    } while (this.numero != 0);
    this.numeros.pop(); 

    let suma = (accumulator, value) =>  accumulator + value;
    let resta = (accumulator, value) =>  accumulator - value;
    let multiplicacion = (accumulator, value) =>  accumulator * value;
    let division = (accumulator, value) =>  accumulator / value;
    console.log("Suma: " + this.numeros.reduce(suma) + "; Resta: "+ this.numeros.reduce(resta) +"; Multiplicación: " + this.numeros.reduce(multiplicacion) +" ; División: "+ this.numeros.reduce(division));
  }


  newOperation () {
    let respuesta = prompt("¿Quieres volver a realizar otra operación (s/n)");

    if( respuesta === "n" || respuesta === "N"){
        console.log("Bye!")
    } else {
        
      do {
          this.numero = +prompt("Introduce un número");
          this.numeros.push(this.numero); 
      } while (this.numero != 0);
      this.numeros.pop ();
      this.generateNumbers(); 

    }
  }

}
new Calculator ()





