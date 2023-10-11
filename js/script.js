// Tailwind config
// -------------------------------------------------------------
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#00DFC0',
      },
      fontFamily: {
        'sans': ['Montserrat', 'Poppins', ...tailwind.defaultTheme.fontFamily.sans],
      },
    },
  },
};
// -------------------------------------------------------------
// Toggle for navbar hamburger
// -------------------------------------------------------------
const nav = document.querySelector('#navbar-menu');
const navbarToggle = document.querySelector("#navbar-toggle");

navbarToggle.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});
// -------------------------------------------------------------
