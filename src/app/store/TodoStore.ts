import { observable,computed,action} from 'mobx';
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

  @action
  complateAll = ():void => {
    this.todos = this.todos.map((item) => ({ ...item,completed:true }));
  }
  
  @action
  deleteTodo = (id:number):void => {
    this.todos = this.todos.filter((item) => Object.is(item.id, id) );
  }

  @action 
  editTodo = (id:number,data:Partial<TodoModel>):void => {
    this.todos = this.todos.map((item) => {
      if(Object.is(item.id, id)){
        if(typeof item.text === 'string'){
          item.text = data.text;
        }
        if(typeof item.completed === 'number'){
          item.completed = data.completed;
        }
      }
      return item;
    })
  }
}

export default TodoStore;