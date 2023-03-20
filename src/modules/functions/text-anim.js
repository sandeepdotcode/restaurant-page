function addTextAnimation(node, text) {
  let delayCount = 0;

  Array.from(text).forEach((letter) => {
    let letterElement;
    if (letter === '%') {
      letterElement = document.createElement('br');
    } else if (letter === ' ') {
      letterElement = document.createElement('span');
      letterElement.innerHTML = '&nbsp;';
      letterElement.style.transitionDelay = `${delayCount}s`;
    } else {
      letterElement = document.createElement('span');
      letterElement.style.transitionDelay = `${delayCount}s`;
      letterElement.textContent = letter;
    }

    node.appendChild(letterElement);
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
