function TodoCtrl($scope) {
  /*Contiene elementos predefinidos en la lista al momento de abrir el ToDoList*/
   
  /*Esta funcion cuenta cuantos elementos hay agregados*/
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  /*Esta funcion agrega a la lista lo escrito en el cuadro de texto*/
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    /*Esta funcion corresponde al boton Limpiar Completos,
    el cual elimina de la lista los que han sido seleccionados como
    tareas ya realizadas.*/  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}