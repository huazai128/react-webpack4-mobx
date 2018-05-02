import { observable } from 'mobx';

export class TodoModel {
  readonly id:number;
  @observable public text:string;
  @observable public completed:boolean;

  constructor(text:string,completed: boolean = false){
    this.text = text;
    this.completed = completed;
    this.id = TodoModel.generateId(); // 静态属性只能通过class调用，不能通过实例调用
  }

  static nextId = 1;
  static generateId(){
    return this.nextId++;
  }
}

export default TodoModel;