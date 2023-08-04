import { API_KEY, BASE_URL, IMG_URL, language } from './api.js';

const btn = document.querySelector('.btn');
const listElements = document.querySelector('.content-box');
let currentIndex = 0;

function apiRequest(){
    fetch(`${BASE_URL}${API_KEY}&query=cassino&${language}`)
    .then(response => response.json())
    .then(data => {
      const results = data.results;

      if (currentIndex >= results.length) {
        currentIndex = 0;
      }

      const title = results[currentIndex].original_title;
      const description = results[currentIndex].overview;
      const img = results[currentIndex].backdrop_path;

      if (img.trim() !== '' && title.trim() !== '' && description.trim() !== '') {
        const htmlElement = `
          <div class="box">
            <img src="${IMG_URL}/${img}" alt="${title}">
            <div class="textBox">
              <div class="title">
                <h1>${title}</h1>
              </div>
              <div class="description">
                <h2>${description}</h2>
              </div>
            </div>
          </div>
        `;

        listElements.innerHTML = htmlElement;
        currentIndex++;
      }
    })
    .catch(error => {
      console.log(error);
    });
}

btn.addEventListener('click', apiRequest)







