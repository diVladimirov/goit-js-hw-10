export function fetchCountries(country) {
  return fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
    if (!response.ok) {
      return Promise.reject('Oops, there is no country with that name');
    }
    return response.json();
  });
}
