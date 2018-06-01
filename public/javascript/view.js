const view = {
    target: document.getElementById('todo'),
    render: (data) => {
        let template = '';
        let counter = 0;
        for (let key in data) {
            if (data[key]) {
                template += `
            <li class='todo'  data-id=${key}>
                <span>${data[key]}</span>
                <button type="button" onclick='controller.modify.switch(event)'>Edit</button>
                <button type="button" onclick='controller.delete(${key})'>Delete</button>
            </li>
            `
            }
        }
        view.target.innerHTML = template;
    },
    modify: (e) => {
        const todo = e.target.parentNode.firstElementChild;
        const id = todo.parentNode.dataset.id;
        todo.innerHTML = `<input type='text' id='modifyStr' value=${todo.innerHTML}>`
        e.target.innerHTML='Done';
        e.target.onclick= ()=>{return controller.modify.done(id)};
        
    }
}