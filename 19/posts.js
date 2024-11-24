'use strict'

const articlesList = document.getElementsByTagName('main')[0];

// Создаём статью на странице
function createArticle (header, text) {
    const articleNew = document.createElement('article');
    const articleHeader = document.createElement('h2');
    articleHeader.innerText = header;
    const articleBody = document.createElement('p');
    articleBody.innerText = text;

    articleNew.append(articleHeader);
    articleNew.append(articleBody);

    return articleNew;
}


function printArticle(article) {
    articlesList.appendChild(article);
}

// Достаём статьи из АПИ
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((json) => {
    json.forEach((article) => {
      console.log(article);
      printArticle(createArticle(article.title, article.body));
    });
  });
