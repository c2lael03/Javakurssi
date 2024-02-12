   
   const getRandomIntNumberInRange = (min, max) => {
   return Math.floor(Math.random() * max) + min;
}

document.querySelector('button').addEventListner('click',() => 
{
   const randomized_number = getRandomIntNumberInRange(1,6)
   const input = document.querySelector('input')
   const guess = Number (input.value)

   if (guess === randomized_number) 
   {
      alert("Arvasit oikein, numero on " + randomized_number)
   }
   else
   {
      alert("Arvasit väärin, numero on " + randomized_number)
   }

   input.value = ''
   input.focus()
})
