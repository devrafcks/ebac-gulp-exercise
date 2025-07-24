document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginMessage = document.getElementById('loginMessage');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'user' && password === 'password') {
      loginMessage.textContent = 'Login bem-sucedido!';
      loginMessage.classList.remove('error');
      loginMessage.classList.add('success');
    } else {
      loginMessage.textContent = 'Usuário ou senha inválidos.';
      loginMessage.classList.remove('success');
      loginMessage.classList.add('error');
    }
  });
});
