// reference
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');



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