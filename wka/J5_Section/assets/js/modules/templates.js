export const newsTemplate = news => `
   <li class="list-group-item">
      <h2>${news.title}</h2>
      <img src="${news.urlToImage}" alt="newsImage">
      <p>${news.description}</p>
   </li>
`;

export const newsCardTemplate = news => `
   <li class="list-group-item news__item">
      <a class="news__link" href = "${news.url}">
         <p class="news__title">${news.title}</p>
      </a>
   </li>
`;
