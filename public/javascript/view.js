const view = {
    target: document.getElementById('todo'),
    render: (data) => {
        let template = '';
        for (let key in data) {
            if (data[key]) {
                template += `
            <li class='todo'  data-id=${key}>
                <span>
                <span class='span-todo'>${data[key]}</span>
                </span>
                <span>
                <button type="button" class='btn-green'onclick='controller.modify.switch(event)'>Edit</button>
                <button type="button"  class='btn-red'onclick='controller.delete(${key})'>Delete</button>
                </span>
            </li>
            `
            }
        }
        view.target.innerHTML = template;
    },
    modify: (e) => {
        const todo = e.target.parentNode.parentNode.firstElementChild.firstElementChild;
        const id = todo.parentNode.parentNode.dataset.id;
        todo.innerHTML = `<input type='text' id='modifyStr' value=${todo.innerHTML}>`
        e.target.innerHTML='Done';
        e.target.className = 'btn-orange'
        e.target.onclick= ()=>{return controller.modify.done(id)};
    },
    push:(message)=>{
        const target =document.getElementById('div_push');
        const elem = document.createElement('p');
        elem.innerHTML = message;
        target.appendChild(elem);
        setTimeout(() => {
            view.removePush(elem);
        }, 4000);
    },
    removePush:(elem)=>{
        const target =document.getElementById('div_push');
        target.removeChild(elem);   
    }
}