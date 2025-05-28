const container = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  const size = Math.random() * 20 + 10;
  heart.style.fontSize = size + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  container.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 100);
