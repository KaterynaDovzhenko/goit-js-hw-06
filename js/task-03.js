const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgEl = document.querySelector('.gallery');

// var 1

// const markup = images.map(({ url, alt }) => `<li class="item">
// <img src="${url}" alt = "${alt}" class = "img" >
// </li>`).join('');

// imgEl.insertAdjacentHTML("beforeend", markup);


// var 2

const makeGalleryCard = ({ url, alt }) => `<li class="item">
// <img src="${url}" alt = "${alt}" class = "img" >
// </li>`;

const galleryCard = images.map((el) => makeGalleryCard(el));
imgEl.insertAdjacentHTML("afterbegin", galleryCard.join(""));