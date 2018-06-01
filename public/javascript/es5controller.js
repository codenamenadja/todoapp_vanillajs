'use strict';

var controller = {
    init: function init() {
        var storage = window.sessionStorage.todolist;
        if (storage) {
            document.getElementById('newStr').value = '';
            controller.read();
        } else {
            controller.save();
        }
        view.render(model);
    },
    delete: function _delete(id) {
        //Delete
        delete model[id];
        controller.save();
        controller.init();
        controller.push(id + ' was deleted');
    },
    add: function add() {
        //Create
        var value = document.getElementById('newStr').value;
        if (value.length < 4) {
            return controller.push('error: string must at least 4-charactor.');
        }
        var id = new Date().getTime();
        model[id] = value;
        controller.save();
        controller.init();
        controller.push('new item set!');
    },
    read: function read() {
        //Read
        model = JSON.parse(window.sessionStorage.todolist);
    },
    save: function save() {
        //Save
        window.sessionStorage.todolist = JSON.stringify(model);
    },
    modify: {
        switch: function _switch(e) {
            if (document.getElementById('modifyStr')) {
                return controller.push('error:modifying is yet on going...');
            }
            view.modify(e);
            controller.push('start modifying...');
        },
        done: function done(id) {
            model[id] = document.getElementById('modifyStr').value;
            view.render(model);
            controller.push('modifed done!');
        }
    },
    push: function push(message) {
        view.push(message);
    }
};