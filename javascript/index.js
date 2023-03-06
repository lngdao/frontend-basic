const input = document.querySelector('.input');
const button = document.querySelector('.btn');

// login f8: const loginBtn = document.querySelector('.NavBar_loginBtn__5DxZL')

button.addEventListener('click', () => {
  if (input.value) alert(input.value);
});
