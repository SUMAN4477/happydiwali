function createFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = Math.random() * window.innerWidth + 'px';
  firework.style.top = Math.random() * (window.innerHeight * 0.5) + 'px';
  document.body.appendChild(firework);

  const colors = ['#00bfff', '#ffd700', '#4169e1', '#ffed4e', '#1e90ff', '#ffa500', '#00ffff', '#ffff00'];
  const particles = 40;

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = firework.style.left;
    particle.style.top = firework.style.top;
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / particles;
    const velocity = 4 + Math.random() * 5;
    let x = 0, y = 0;
    const gravity = 0.08;
    let vy = Math.sin(angle) * velocity;
    let vx = Math.cos(angle) * velocity;

    function animate() {
      vy += gravity;
      x += vx;
      y += vy;
      particle.style.transform = `translate(${x}px, ${y}px)`;
      particle.style.opacity = Math.max(0, 1 - Math.abs(y) / 300);

      if (Math.abs(y) < 500) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    }
    animate();
  }

  firework.remove();
}

function createMegaBlast() {
  for (let i = 0; i < 2; i++) {
    setTimeout(() => createFirework(), i * 150);
  }
}

setInterval(createMegaBlast, 1200);

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.animationDelay = Math.random() * 3 + 's';
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 3000);
}

setInterval(createSparkle, 300);

for (let i = 0; i < 30; i++) {
  setTimeout(createSparkle, Math.random() * 3000);
}
