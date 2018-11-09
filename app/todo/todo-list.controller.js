(function() {
    'use strict';

    angular
        .module('app.todo')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = [];
    function TodoListController() {
        var vm = this;

        vm.name = 'Miguel Fontes'
        vm.list = [];

        activate();

        ////////////////

        function activate() {
            vm.list.push([
                todo("my first todo"),
                todo("my second todo")
            ])
        }

        function todo(title) {
            return {
                id: hash(title),
                title: title
            }
        }

        function hash(string) {
            return Math.random() * string.length * new Date().getSeconds()
        }


    }
})();