export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(image => `
      <a href="${image.largeImageURL}" class="gallery__item">
        <img src="${image.webformatURL}" alt="${image.tags}" />
        <div class="info">
          <p><b>Likes:</b> ${image.likes}</p>
          <p><b>Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </a>
    `)
    .join('');
}
