document.addEventListener('DOMContentLoaded', () => {

  const faq = document.querySelectorAll('details');

  faq.forEach(item => {
    item.addEventListener('toggle', () => {
      console.log('FAQ dibuka');
    });
  });

});
