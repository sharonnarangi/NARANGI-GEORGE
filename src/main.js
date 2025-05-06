import './style.css'
// Your JavaScript code here
console.log('Vite + Tailwind CSS!');

document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
  