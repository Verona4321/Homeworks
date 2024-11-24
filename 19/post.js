'use strict'

const title = document.getElementById('postTitle');
const text = document.getElementById('postBody');
const btn = document.getElementById('btn-submit');
const posts = document.getElementById('postsList');

function getTitle () {
    if (title.value === '') {
        throw new Error ('Напишите название статьи');
    }
    return title.value;
}

function getText () {
    if (postText.value == '') {
        throw new Error ('Напишите содержание статьи');
    }
    return text.value;
}

function createPost(title, text) {
    const article = document.createElement('article');
    article.classList.add('post')
    const h2 = document.createElement('h2');
    h2.classList.add('post__title');
    h2.innerText = title;
    const p = document.createElement('p');
    p.classList.add('post__text');
    p.innerText = text;

    article.appendChild(h2);
    article.appendChild(p);

    posts.appendChild(article)
}

function setPost () {
    const title = getTitle();
    const text = getText();

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: title,
    body: text,
    userId: 1,
}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => createPost(json.title, json.body));

cleanInputs();
}

btn.addEventListener('click', setPost);