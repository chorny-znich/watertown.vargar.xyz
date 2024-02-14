const SMALL_SCREENSHOT_NUMBER = 4;
const SMALL_SCREENSHOT_SIZE = {
  width: 250,
  height: 150,
};
window.addEventListener('load', () => {
  run();
});

function run() {
  let bigScreenshot = document.querySelector('.screenshot-big');
  const screenshotContainer = document.querySelector('.screenshot-container');
  
  for (let i = 1; i <= SMALL_SCREENSHOT_NUMBER; i++) {
    let img = new Image(SMALL_SCREENSHOT_SIZE.width, SMALL_SCREENSHOT_SIZE.height);
    img.src = `./assets/img/screenshot_small_${i}.jpg`;
    img.alt = "game's screenshot in the small size";
    img.className = 'screenshot-small';
    img.addEventListener('click', () => {
      bigScreenshot.src = `./assets/img/screenshot_big_${i}.jpg`;
    });
    screenshotContainer.appendChild(img);
  }
}