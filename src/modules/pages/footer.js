function loadFooter() {
  const footer = document.querySelector('footer');
  const footerWrapper = document.createElement('div');
  footerWrapper.className = 'footer-wrapper';
  const footerTop = document.createElement('div');
  const footerBottom = document.createElement('div');
  footerTop.className = 'footer-top';
  footerBottom.className = 'footer-bottom';

  const footerMenu = document.createElement('div');
  footerMenu.className = 'footer-menu';

  const menuItems = ['HOME', 'ABOUT', 'GIFT CARDS', 'ORDER', 'CONTACT'];
  for (let i = 0; i < 5; i += 1) {
    const link = document.createElement('a');
    link.className = 'footer-menu-item';
    link.textContent = menuItems[i];
    footerMenu.appendChild(link);
  }
  const footerMiddleRow = document.createElement('div');
  footerMiddleRow.className = 'footer-2nd-row';
  const addressDiv = document.createElement('div');
  addressDiv.innerHTML = '<span>BUCKINGHAM PALACE</span><span class=\'addr-delimiter\'>|</span><span>MARLBOROUGH RD, LDN</span><span class=\'addr-delimiter\'>|</span><span>COPYRIGHT 2023</span>';
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'footer-btn-div';
  const orderBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  orderBtn.className = 'footer-btn';
  reserveBtn.className = 'footer-btn';
  orderBtn.textContent = 'ORDER';
  reserveBtn.textContent = 'RESERVE';
  buttonDiv.append(orderBtn, reserveBtn);
  footerMiddleRow.append(addressDiv, buttonDiv);

  footerTop.append(footerMenu, footerMiddleRow);

  const timingText = document.createElement('div');
  timingText.className = 'open-hours-txt';
  timingText.textContent = 'SUDAY - THURSDAY: 11:30AM - 11PM FRIDAY & SATURDAY: 11:30AM - 12AM';
  const creatorInfo = document.createElement('div');
  creatorInfo.className = 'creator';
  const creatorLink = document.createElement('a');
  creatorLink.textContent = 'DEVELOPED BY SANDEEP K K ';
  const gitHub = document.createElement('i');
  gitHub.classList.add('fa-brands', 'fa-github');
  creatorLink.appendChild(gitHub);
  creatorInfo.appendChild(creatorLink);
  footerBottom.append(timingText, creatorInfo);

  footerWrapper.append(footerTop, footerBottom);
  footer.appendChild(footerWrapper);
}

export default loadFooter;
