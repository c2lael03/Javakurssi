const diceImages = [
   "./img/1.png",
   "./img/2.png",
   "./img/3.png",
   "./img/4.png",
   "./img/5.png",
   "./img/6.png",
 ];
 
 const rollDie = () => {
   const random_number = Math.floor(Math.random() * diceImages.length);
   const diceImage = document.querySelector("#dice img");
   diceImage.src = diceImages[random_number];
 };
 
 document.querySelector("button").addEventListener("click", rollDie);