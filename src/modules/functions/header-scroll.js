function changeHeaderOnScroll() {
  const header = document.querySelector('header');

  header.style.backgroundColor = (this.scrollY > 10) ? 'var(--header-bg)' : 'transparent';
}

export default changeHeaderOnScroll;
