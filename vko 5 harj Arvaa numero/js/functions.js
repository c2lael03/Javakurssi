   
   //const getRandomIntNumberInRange = (min, max) => {
   //return Math.floor(Math.random() * max) + min;
   //}

   document.querySelector('button').addEventListener('click',() => 
{
   const input = document.querySelector('input')
   const guess = Number (input.value)
   const random_number =  Math.floor(Math.random() * 6) + 1

   if (guess === random_number) 
   {
      alert("Arvasit oikein, numero on " + random_number)
   }
   else
   {
      alert("Arvasit väärin, numero on " + random_number)
   }

   input.value = ''
   input.focus()
})
