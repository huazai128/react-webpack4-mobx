import { observable,computed,action } from 'mobx';
import { TodoModel } from 'app/models';

export class TodoStore{
  constructor(fixtrues:TodoModel[]){
    this.todos = fixtrues;
  }

  @observable public todos:Array<TodoModel>;
  
  @computed
  get activeTodos(){
    return this.todos.filter((item) => !item.completed);
  }

  @computed
  get completedTodos(){
    return this.todos.filter(item =>  item.completed);
  }

  @action
  addTodo = (item:Partial<TodoModel>):void => {
    this.todos.push(new TodoModel(item.text, item.completed));
  }

  @action
  clearCompleted = ():void => {
    this.todos = this.todos.filter((item) => !item.completed)
  }
}

export default TodoStore;