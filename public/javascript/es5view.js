'use strict';

var view = {
    target: document.getElementById('todo'),
    render: function render(data) {
        var template = '';
        for (var key in data) {
            if (data[key]) {
                template += '\n            <li class=\'todo\'  data-id=' + key + '>\n                <span>\n                <span class=\'span-todo\'>' + data[key] + '</span>\n                </span>\n                <span>\n                <button type="button" class=\'btn-green\'onclick=\'controller.modify.switch(event)\'>Edit</button>\n                <button type="button"  class=\'btn-red\'onclick=\'controller.delete(' + key + ')\'>Delete</button>\n                </span>\n            </li>\n            ';
            }
        }
        view.target.innerHTML = template;
    },
    modify: function modify(e) {
        var todo = e.target.parentNode.parentNode.firstElementChild.firstElementChild;
        var id = todo.parentNode.parentNode.dataset.id;
        var originVal = todo.innerHTML;
        todo.innerHTML = '<input type=\'text\' id=\'modifyStr\'>';
        document.getElementById('modifyStr').value = originVal;
        e.target.innerHTML = 'Done';
        e.target.className = 'btn-orange';
        e.target.onclick = function () {
            return controller.modify.done(id);
        };
    },
    push: function push(message) {
        var target = document.getElementById('div_push');
        var elem = document.createElement('p');
        elem.innerHTML = message;
        target.appendChild(elem);
        setTimeout(function () {
            view.removePush(elem);
        }, 4000);
    },
    removePush: function removePush(elem) {
        var target = document.getElementById('div_push');
        target.removeChild(elem);
    }
};