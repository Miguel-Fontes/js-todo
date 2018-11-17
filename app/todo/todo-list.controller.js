(function() {
  "use strict";

  angular
    .module("app.todo")
    .controller("TodoListController", TodoListController);

  TodoListController.$inject = [];
  function TodoListController() {
    var vm = this;

    vm.lists = [];

    activate();

    function activate() {
      vm.lists.push(
        list({
          title: "Home",
          tasks: [task("Estudar Angular"), task("Tirar o lixo")]
        })
      );

      vm.selected = vm.lists[0];
    }

    function task(title) {
      return {
        id: hash(title),
        title: title
      };
    }

    function list(spec, my) {
      var that = {};
      my = my || {};

      init();

      function init() {
        that.title = spec.title;
        that.tasks = spec.tasks || [];
      }

      return that;
    }

    function hash(string) {
      return Math.random() * string.length * new Date().getSeconds();
    }
  }
})();
