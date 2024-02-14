const NUMBER_OF_GALLERY_ITEMS = 4;

const galleryItems = [
  {
    title: 'Aliquam erat volutpat',
    path: '../assets/img/gallery/gallery_1.jpg',
    description: 'Aliquam erat volutpat. Quisque efficitur efficitur tristique. Nam feugiat porta elit, et dapibus lorem accumsan at. Praesent ornare pulvinar consequat. Suspendisse potenti.',
  },
  {
    title: 'Donec egestas',
    path: '../assets/img/gallery/gallery_2.jpg',
    description: 'Donec egestas ante ac odio sagittis, vitae laoreet mi interdum. Pellentesque viverra dui vel odio dictum, et tincidunt erat pulvinar. Ut ultricies nisi nec purus egestas, in faucibus magna sagittis. Vestibulum in congue mauris. Ut odio elit, laoreet vitae finibus id, vulputate non nunc.',
  },
  {
    title: 'Praesent in metus',
    path: '../assets/img/gallery/gallery_3.jpg',
    description: 'Praesent in metus at erat finibus pharetra. Aliquam nec urna mollis ligula pulvinar imperdiet. Duis in felis eros. Vestibulum sit amet suscipit eros. Fusce mattis porttitor neque, id pharetra sem viverra at. Phasellus fringilla mauris et est sagittis, sit amet gravida arcu dignissim. Suspendisse venenatis, nunc ut venenatis pretium, turpis est mattis justo, in rutrum eros magna in tortor.',
  },
  {
    title: 'Nam sollicitudin libero',
    path: '../assets/img/gallery/gallery_4.jpg',
    description: 'Nam sollicitudin libero eu arcu maximus bibendum. Nulla porta sapien enim, commodo hendrerit augue faucibus sit amet. Pellentesque ut vehicula lorem. Mauris et mi ac neque fringilla rhoncus ac sit amet arcu. Nulla aliquet, ipsum nec sagittis malesuada, nibh velit pulvinar ipsum, id iaculis tortor nulla sed odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in tincidunt sapien.',
  },
];

let currentItem = 0;

let itemTitle;
let sliderImage;
let itemDescription;

window.addEventListener('load', () => {
  itemTitle = document.querySelector('.object-header');
  sliderImage = document.querySelector('.slider-image');
  itemDescription = document.querySelector('.item-description');
  
  const leftArrow = document.querySelector('.left-arrow');
  leftArrow.addEventListener('click', () => {
    if (currentItem > 0) {
      if (currentItem === NUMBER_OF_GALLERY_ITEMS - 1) {
        rightArrow.classList.toggle('hide-arrow');
      }
      currentItem--;
      if (currentItem === 0) {
        leftArrow.classList.toggle('hide-arrow');
      }
      showGallertItem();
    }
  });
  const rightArrow = document.querySelector('.right-arrow');
  rightArrow.addEventListener('click', () => {
    if (currentItem < NUMBER_OF_GALLERY_ITEMS - 1) {
      if (currentItem === 0) {
        leftArrow.classList.toggle('hide-arrow');
      }
      currentItem++;
      if (currentItem === NUMBER_OF_GALLERY_ITEMS - 1) {
        rightArrow.classList.toggle('hide-arrow');
      }
      showGallertItem();
    }
  });

  showGallertItem();
});

function showGallertItem() {
  itemTitle.textContent = galleryItems[currentItem].title;
  sliderImage.src = galleryItems[currentItem].path;
  itemDescription.textContent = galleryItems[currentItem].description;
}