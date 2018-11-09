(function() {
  "use strict";

  const template = `
    <h1>Hello World</h1>
    {{$id}}
  `

  angular
    .module("app.todo")
    .component("todoList", {
        template: template,
        restrict: 'E',
        replace: true,
        scope: {
          list: '<'
        }
    })
})();
