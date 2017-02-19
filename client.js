// it should store the todos arrays on an object
var todoList = {
  todos: [],

// it should have a display todos method
  displayTodos: function() {
    // it should tell you if list is empty
    if(this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        // it should show completed todos
        if(this.todos[i].completed === true) {
          console.log("(x) ", this.todos[i].todoText); // todosObject.eachTodoItem[i].todoTextProperty
        } else {
          console.log("( ) ", this.todos[i].todoText);
        }
      }
    }
  },

  // addTodo should add objects ie todo text
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText, // property: parameter
      completed: false
    });
    this.displayTodos();
  },

  //change todo should change the todo text property
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText; //todolistObject.todosArray[positionParameter].todoTextProperty = todoTextValue
    this.displayTodos();
  },

  // it should have a delete todo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  //toggle Completed should flip the completed property
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {// if all todos items are completed then increment by one
        completedTodos++;
      }
    }
    //Case 1: If everything is true, make everything false
    if(completedTodos === totalTodos) {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
        }
    //Case 2: Otherwise make everything true
    } else {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true;
        }
      }
    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodotextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodotextInput.value);
    addTodotextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    var toggleCompletedTextInput = document.getElementById('toggleCompletedTextInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
   toggleAll: function() {
    todoList.toggleAll();
  }
};
