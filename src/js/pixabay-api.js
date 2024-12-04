export function searchImages(param) {
  const API_KEY = '47454065-99b1a3e0cb50d1f3af73f6d7c';
  const URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: param,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => console.log(error.message));
}