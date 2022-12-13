const stickyElements = document.getElementsByClassName('sticky');

const TOP_OF_STUCK_IMAGE = 20; // Matches the 'top' CSS attribute on the 'sticky' class
const HEIGHT_OF_IMAGE = 40; // Matches the 'height' CSS attribute of the 'sticky'

window.onscroll = function () {
  for (var el of stickyElements) {
    console.log(`top: ${el.getBoundingClientRect().top}`);
    if (el.getBoundingClientRect().top < TOP_OF_STUCK_IMAGE + HEIGHT_OF_IMAGE) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  }
}