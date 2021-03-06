const controller = {
    init: () => {
        const storage = window.sessionStorage.todolist;
        if (storage) {
            document.getElementById('newStr').value = '';
            controller.read();
        } else {
            controller.save();
        }
        view.render(model);
        
    },
    delete: (id) => {//Delete
        delete model[id];
        controller.save();
        controller.init();
        controller.push(`${id} was deleted`);
    },
    add: () => {//Create
        let value = document.getElementById('newStr').value;
        if (value.length < 4) {
           return controller.push('error: string must at least 4-charactor.');
        }
        const id = new Date().getTime();
        model[id] = value;
        controller.save();
        controller.init();
        controller.push('new item set!')
    },
    read: () => { //Read
        model = JSON.parse(window.sessionStorage.todolist);
    },
    save: () => {//Save
        window.sessionStorage.todolist = JSON.stringify(model);
    },
    modify: {
        switch:(e)=>{
            if(document.getElementById('modifyStr')){
                return controller.push('error:modifying is yet on going...');
            }
            view.modify(e);
            controller.push('start modifying...');
        },
        done:(id)=>{
            model[id] = document.getElementById('modifyStr').value;
            view.render(model);
            controller.push('modifed done!');
        },
    },
    push: (message) => {
        view.push(message);
    }
}
