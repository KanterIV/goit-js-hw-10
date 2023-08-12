import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

refs.select.addEventListener('change', createCatInfoMarkup);

fetchBreeds()
  .then(data => {
    refs.select.insertAdjacentHTML('beforeend', createSelectOptions(data));
  })
  .catch(err => console.error(refs.error.textContent)); //!

function createSelectOptions(breeds) {
  return breeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createCatInfoMarkup(e) {
  console.log(e);
}
