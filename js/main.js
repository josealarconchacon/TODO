// reference
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchTodo = document.querySelector('.search input');


// function that generate html template and add it to the list
const template = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    // add html template to the list
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    // get user input
    const todo = addForm.add.value.trim();
    // check if user type value
    if(todo.length) {
        template(todo);
        // clear form after submit new todo
        addForm.reset();
    }
});

// deleting todo
list.addEventListener('click', e => {
    // check if the target element contain a class name delete
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// filter todo 
const filterTodo = (term) => {
    // console.log(term);
    // filter and show the todo that do no contain the term
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

        // get all of the element that do match
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

// search todo
// keyup event
searchTodo.addEventListener('keyup', () => {
    const term = searchTodo.value.trim().toLowerCase();
    filterTodo(term);
});
