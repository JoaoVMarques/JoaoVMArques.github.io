const section = document.getElementById('projects');

const leassonsLearned = {
  href: './projects/leassons-learned/index.html',
  img: './projects-images/leassons-learned.png',
  alt: 'foto do site Leassons learned',
  title: 'Leassons Learned',
  description: 'Primeiro projeto da trybe, foi muito legal participar mas é apenas o começo.'
}

const pixelsArt = {
  href: './projects/pixels-art/index.html',
  img: './projects-images/pixels-art.png',
  alt: 'foto do site pixelsArt',
  title: 'Pixels Art',
  description: 'Site de colorir pixelzinhos com cores pré determinadas'
}

const todoList = {
  href: './projects/todo-list/index.html',
  img: './projects-images/todo-list.png',
  alt: 'foto do site Todo List',
  title: 'Todo list',
  description: 'Uma lista de afazeres basica. podendo apagar e mudar items da lista.'
}

// Project ----
function createProject(object) {  
  const article = document.createElement('article');
  article.classList.add('project-article');
  article.appendChild(createContainerProject(object));
  section.appendChild(article);
}

function createContainerProject(object) {
  const container = document.createElement('div');
  container.classList.add('container-projects');
  container.appendChild(createLinkProject(object));
  container.appendChild(createTexts('h2', 'project-title', object.title));
  container.appendChild(createTexts('p', 'project-text', object.description));
  return container;
}

function createLinkProject(object) {
  const link = document.createElement('a');
  link.target = '_blank'
  link.href = object.href;
  link.appendChild(createImageProject(object));
  link.appendChild
  return link;
}

function createImageProject(object) {
  const img = document.createElement('img');
  img.src = object.img;
  img.alt = object.alt;
  img.classList.add('projects-images');
  return img;
}

function createTexts(element, classe, texto) {
  const text = document.createElement(element);
  text.classList.add(classe);
  text.innerText = texto;
  return text;
}
// Project ----
createProject(leassonsLearned);
createProject(pixelsArt);
createProject(todoList);