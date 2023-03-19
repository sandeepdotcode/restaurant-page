function addTextAnimation(node, text) {
  let delayCount = 0;

  Array.from(text).forEach((letter) => {
    const letterSpan = document.createElement('span');
    letterSpan.textContent = letter;
    letterSpan.style.transitionDelay = `${delayCount}s`;

    node.appendChild(letterSpan);
    delayCount += 0.04;
  });

  return node;
}

function activateAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-active');
      }
    });
  });

  const nodesToObserve = document.querySelectorAll('.activate-anim');
  nodesToObserve.forEach((nodeTO) => {
    observer.observe(nodeTO);
  });
}

export { addTextAnimation, activateAnimation };
