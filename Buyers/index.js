const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// For opening the navbar
if(bar){
    bar.addEventListener('click', () => {
       nav.classList.add('active');      
    });
};

// For closing the navbar
if(close){
    close.addEventListener('click', () => {
       nav.classList.remove('active');      
    });
};
