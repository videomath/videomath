



// Popup Modal

  const button = document.querySelector('.works__btn');
  const popup = document.querySelector('.popup-wrapper'); 
  const closeMe = document.querySelector('.popup-close');
  // const fullName = document.querySelector('.name');
  // const email = document.querySelector('.email');
  // const video = document.querySelector('.video');
  // const contactForm = document.querySelector('.works__form');
 
  
  button.addEventListener('click', (e) => {
    e.preventDefault();      
      popup.style.display = 'block'; 
      contactForm.reset();
  });

  closeMe.addEventListener('click', () => {
    // e.preventDefault();
    popup.style.display = 'none';
  });

  popup.addEventListener('click', () => {
    // e.preventDefault();
    popup.style.display = 'none';
  });

 


 
