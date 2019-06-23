makeLinkActive = () => {
  const currentPath = location.pathname.split('/')[1]
  if (currentPath === '') {
    return false;
  }
  const menuLinks = document.querySelectorAll('.nav-link');
  [].forEach.call(menuLinks, el => {
    if (el && el.innerText.toLowerCase() === currentPath) {
      el.classList.add('active')
      return
    }
  })
}
window.addEventListener('DOMContentLoaded', () => {
  makeLinkActive();
})
