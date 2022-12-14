'use strict';

const documenReady = () => {
   const heroTitle = document.getElementById('heroTitle');
   const yesButton = document.getElementById('yesButton');
   const noButton = document.getElementById('noButton');


   const getPartner = () => {
    alert('Gotcha');
    alert('Has capturado un Puchamon salvaje');
    alert('No se aceptas devoluciones 💖');
    alert('Te amo mucho señora de mi corazon, feliz dia porq todos los dias que te lo dije tarde');
    location.href = 'https://www.youtube.com/watch?v=xfDiy0va_ig';
    
   };



   const sad = () => {
    noButton.style.top = Math.random() * innerHeight + 'px';
    noButton.style.left = Math.random() * innerWidth + 'px';
   };

   const partner = prompt('Dime tu name ❤️')
   heroTitle.innerText += ` ${partner || 'BB'} ? `; 

   yesButton.addEventListener('click', getPartner ) 
   noButton.addEventListener('mouseover', sad)
};

document.addEventListener('DOMContentLoaded', documenReady);