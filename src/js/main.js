import $ from 'jquery';
import _ from 'lodash';

// Get our classes
import { TodoList } from './models/todo';
// import { Task } from './models/task';
import { AppController } from './controllers/appController';


// Store Elements
let todoForm = $('.todoForm'); // <form>
let todos = $('.todos'); // <ul>


// We need to "model" our Todo List
let groceryList = new TodoList('Grocery List');


// Instantiate our App Controller
let app = new AppController(todoForm, todos, groceryList);
app.init();
// console.log(app);

let honeyList = new TodoList('Honey Do List');
new AppController ( $('.todoForm2'), $('.todos2'), honeyList).init();
