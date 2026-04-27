// Khizra Yaqoob - Portfolio JS
function initTheme() {
  const themeBtn = document.getElementById('themeBtn');
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.textContent = 'Light Mode';
  } else {
    if (themeBtn) themeBtn.textContent = 'Dark Mode';
  }
  
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }
}

function initMenu() {
  const menuBtn = document.querySelector('nav button:last-of-type');
  const menuDiv = document.getElementById('menuLinks');
  if (!menuBtn || !menuDiv) return;
  menuBtn.addEventListener('click', () => {
    menuDiv.style.display = menuDiv.style.display === 'block' ? 'none' : 'block';
  });
}

function initYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMenu();
  initYear();
});
