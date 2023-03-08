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

export default addTextAnimation;
