import './style.css'
// Your JavaScript code here
console.log('Vite + Tailwind CSS!');



  const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

let isOpen = false;

toggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  isOpen = !isOpen;

  if (isOpen) {
    // Animate into X
    bar1.classList.add('rotate-45', 'translate-y-1.5');
    bar3.classList.add('-rotate-45', '-translate-y-1.5');
    bar2.classList.add('opacity-0');
  } else {
    // Revert to hamburger
    bar1.classList.remove('rotate-45', 'translate-y-1.5');
    bar3.classList.remove('-rotate-45', '-translate-y-1.5');
    bar2.classList.remove('opacity-0');
  }
});
