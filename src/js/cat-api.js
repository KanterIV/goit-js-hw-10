const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY =
  'live_G6HU5UlJSCzt5yX2Lg8W5guuU2d8jOPOBK1FMP99fTig1AgXXT0JnSc4eKqbDboB';
function fetchBreeds() {
  return fetch(BREEDS_URL, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {}

export { fetchBreeds, fetchCatByBreed };
