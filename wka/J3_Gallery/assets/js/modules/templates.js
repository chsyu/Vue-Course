export const newsTemplate = news => `
   <li class="list-group-item">
      <h2>${news.title}</h2>
      <img src="${news.urlToImage}" alt="newsImage">
      <p>${news.description}</p>
   </li>
`;

export const newsCardTemplate = news => `
   <li class="list-group-item">
      <a href = "${news.url}">
         <h4>${news.title}</h4>
      </a>
   </li>
`;
