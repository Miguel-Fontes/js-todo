(function() {
  "use strict";

  const template = `
    <h1>{{$ctrl.list.title}}</h1>
        <div ng-repeat="task in $ctrl.list.tasks" class="todo-row">
            <input id={{task.id}}" type="checkbox" name="status" value="{{task.id}}"/></td>
            <label for="{{task.id}}">{{task.title}}</label>
        </div>
    </div>
  `

  angular
    .module("app.todo")
    .component("todoList", {
        template: template,
        restrict: 'E',
        replace: true,
        controllerAs: '$ctrl',
        bindings: {
          list: '<'
        }
    })

})();