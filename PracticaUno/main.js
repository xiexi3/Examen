const divs = document.querySelectorAll("div");
const btns = document.querySelectorAll("button");
const input = document.querySelectorAll("input")[0];
const ul = document.querySelectorAll("ul")[0];

// console.log(ul);

const container = divs[0];
container.className = 'container';

const searchContainer = divs[1];
searchContainer.className = 'search';

const liContainer = divs[2];
liContainer.className = 'li-container';

const emptyContainer = divs[3];
emptyContainer.className = 'empty';

const taskCountContainer = divs[4];
taskCountContainer.className = 'task-count';

const btnAnadir = btns[0];
btnAnadir.className = 'btn-add';

// const 
// botones.forEach(element => {
//   element.setAttribute("style", "background-color: black; border-color: #f6f6f6; color: #f6f6f6");
// });


// function anadirTarea() {

// }


const noTaskSpan = emptyContainer.querySelectorAll("p")[0];
const taskCounter = taskCountContainer.querySelectorAll("span")[1];

console.log(taskCounter.className);

btnAnadir.addEventListener("click", function (e){
  e.preventDefault(); 

  const textoTarea = input.value;
  // console.log(textoTarea);

  crearTareas(ul, textoTarea);
  
  // console.log(liContainer);
})

function crearTareas(ul, texto) {
  const li = document.createElement("li");
  const p = document.createElement("p");
	const span = document.createElement("span");

  const btnDelete = document.createElement("button");
  btnDelete.className = 'btn-delete';
  btnDelete.textContent = 'x';

  ul.appendChild(li)
  li.appendChild(p);
  li.appendChild(btnDelete)
  p.appendChild(span);
  
  span.textContent = texto;
  noTaskSpan.remove();

  return ul;
}
