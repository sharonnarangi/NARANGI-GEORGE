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
   // Correct code
bar1.style.transform = 'translateY(6px) rotate(45deg)';
bar2.style.opacity = '0';  // Middle bar should disappear
bar3.style.transform = 'translateY(-6px) rotate(-45deg)';  // Opposite rotation
  } else {
    // Revert to hamburger
    // When closing menu
bar1.style.transform = 'none';
bar2.style.opacity = '1';
bar3.style.transform = 'none';
  }
});
