// localStorage.setItem('TEST_KEY', JSON.stringify([1, 2, 3, 4]));
// // localStorage.setItem('TEST_KEY_1', '[1, 2, 3, 4]');
// localStorage.setItem('TEST_KEY_1', JSON.stringify({ name: 'hello' }));
// console.log(JSON.parse(localStorage.getItem('TEST_KEY_1')));
// // localStorage.removeItem('TEST_KEY_1');
// localStorage.clear();

const local = document.querySelector('.js-local');
const session = document.querySelector('.js-session');

local.addEventListener('click', () => {
  localStorage.setItem('local', 'test local');
});

session.addEventListener('click', () => {
  sessionStorage.setItem('session', 'test session');
});
