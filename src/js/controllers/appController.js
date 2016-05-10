import { Task } from '../models/task';

export class AppController {
    
  constructor(formElem, taskElem, instance) {
    this.form = formElem;
    this.taskArea = taskElem;
    this.todoListInstance = instance;
  }
  
  init() {
    this.form.on('submit', (event) => {
      event.preventDefault();
      
      let input = this.form.find('input');
      this.addTaskToCollection(input.val());
      input.val(''); // Clear Input
            
    });
  }
  
  addTaskToCollection(taskDesc) {
    let t = new Task(taskDesc); // Create Instance of Task
    this.todoListInstance.tasks.push(t); // Push to my tasks array
    this.addTaskToView(t); // call an update to the view
  }
  
  addTaskToView(taskObj) {
    let taskHTML = this.taskTemplate(taskObj.desc);
    this.taskArea.append(taskHTML);
  }
  
  taskTemplate(taskDesc) {
    return `<li>${taskDesc}</li>`;
  }
  
  
}
