import $ from 'jquery';
import _ from 'lodash';

// Get our classes
import { TodoList } from './classes/todo';
import { Task } from './classes/task';


// Store Elements
let todoForm = $('.todoForm'); // <form>
let todoInput = $('.todoInput'); // <input>
let todos = $('.todos'); // <ul>


// We need to "model" our Todo List
let groceryList = new TodoList('Grocery List');



// Control How We Add Tasks
todoForm.on('submit', function (event) {
  event.preventDefault(); // Stop the form submission
  
  // Get the value of our input
  let taskDesc = todoInput.val(); 
  // Clear our input by setting it to an empty string
  todoInput.val('');
  
  // Update my groceryList model to contain this item
  // Specifically an "instance" of my Task
  let task = new Task(taskDesc);
  groceryList.tasks.push(task);
  
  
  // Visually Show the Element on the page
  let taskHTML = taskTemplate(taskDesc);
  todos.append(taskHTML);
  
  
  console.log(groceryList);
  
});


// Template
function taskTemplate (taskDesc) {
  return `
    <li>${taskDesc}</li>
  `;
}


