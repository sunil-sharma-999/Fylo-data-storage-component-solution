const popup = document.querySelector('p span');
const gbused = document.querySelector('p strong');

window.addEventListener('load', (e) => {
  e.preventDefault();
  if (popup.textContent < 100) {
    pop.style.color = 'red';
    gbused.style.color = 'red';
  } else if (popup.textContent > 100 && popup.textContent < 200) {
    popup.style.color = 'orange';
    gbused.style.color = 'orange';
  } else {
    popup.style.color = 'hsl(229, 57%, 11%)';
    gbused.style.color = 'white';
  }
});

document.querySelector('input').addEventListener('change', (e) => {
  e.preventDefault();
  popup.textContent = 1000 - e.target.value;
  gbused.textContent = e.target.value + ' GB';
  if (1000 - e.target.value < 100) {
    popup.style.color = 'red';
    gbused.style.color = 'red';
  } else if (1000 - e.target.value < 200 && 1000 - e.target.value > 100) {
    popup.style.color = 'orange';
    gbused.style.color = 'orange';
  } else {
    popup.style.color = 'hsl(229, 57%, 11%)';
    gbused.style.color = 'white';
  }
});
