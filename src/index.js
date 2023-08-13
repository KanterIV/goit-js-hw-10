import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { Loading } from 'notiflix';
import { Notify } from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

refs.select.style.display = 'none';
refs.loader.style.display = 'none';
refs.error.style.display = 'none';
refs.catInfo.style.display = 'none';

refs.select.addEventListener('change', createCatInfoMarkup);

Loading.dots();

fetchBreeds()
  .then(data => {
    refs.select.style.display = 'flex';
    refs.select.insertAdjacentHTML('beforeend', createSelectOptions(data));
    new SlimSelect({
      select: refs.select,
    });
  })
  .catch(err => Notify.failure(refs.error.textContent))
  .finally(() => Loading.remove());

function createSelectOptions(breeds) {
  return breeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createCatInfoMarkup(e) {
  Loading.dots();
  let catId = e.target.value;
  fetchCatByBreed(catId)
    .then(data => {
      refs.catInfo.style.display = 'flex';
      const catCard = `<img class="cat-img" src="${data[0].url}" alt="${data[0].breeds[0].name}">
      <div class="cat-box">
        <h1 class="name">${data[0].breeds[0].name}</h1>
        <p class="description">${data[0].breeds[0].description}</p>
        <p class="temperament"><span class="temperament-span">Temperament:</span> ${data[0].breeds[0].temperament}</p>
      </div>`;

      refs.catInfo.innerHTML = catCard;
    })
    .catch(err => Notify.failure(refs.error.textContent))
    .finally(() => Loading.remove());
}
