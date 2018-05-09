import * as React from 'react';
import classnames from 'classnames';
import * as style from './style.scss';
import { TodoModel } from 'app/models/TodoModel';
import  TodoTextInput from 'app/component/TodoTextInput';

export interface TodoActions{
  editTodo: (id:number,data:Partial<TodoModel>) => any;
  deleteTodo: (id:number) => any;
}

export interface TodoItemProps extends TodoActions {
  todo:TodoModel;
}

export interface TodoItemState{
  editing:boolean;
}

export default class TodoItem extends React.Component<TodoItemProps,TodoItemState> {
  constructor(props:TodoItemProps,context?:any){
    super(props,context);
    this.state = {
      editing:false
    }
  }

  private updateTodo = (data:Partial<TodoModel>) => {
    const { todo } = this.props;
    if(data.text !== undefined && data.text.trim().length === 0){
      this.props.deleteTodo(todo.id);
    }else{
      this.props.editTodo(todo.id,data);
    }
    this.setState({
      editing:false
    })
  }

  private handleToggleCheckbox = (e:React.SyntheticEvent<any>) => {
    e.preventDefault();
    const { todo } = this.props;
    const target = e.target as any;
    if(target &&
      target.checked !== undefined &&
      target.checked !== todo.completed){
        this.updateTodo({  completed:target.checked })
      }
  }

  private handleDoubleClick = (e:React.SyntheticEvent<any>) => {
    e.preventDefault();
    this.setState({
      editing:true
    })
  }
  private handleClickDeleteButton = (e:React.SyntheticEvent<any>) => {
    e.preventDefault();
    const { todo,deleteTodo } = this.props;
    deleteTodo(todo.id);
  }

  render() {
    const { todo } = this.props;
    const element = this.state.editing ? (
      <TodoTextInput 
        text={ todo.text } 
        editing={ this.state.editing } 
        onSave={ (text) => { this.updateTodo({ text }) } } />
    ) : (
      <div className={ style.view }>
        <input 
          type="checkbox"
          onChange={ this.handleToggleCheckbox } 
          checked={ todo.completed } />
        <label onDoubleClick={ this.handleDoubleClick }>{ todo.text }</label>
        <button 
          className={ style.destroy } 
          onClick={ this.handleClickDeleteButton }
          ></button>
      </div>
    );
    const classes = classnames({
      [style.completed]: todo.completed,
      [style.editing]: this.state.editing,
      [style.normal]: !this.state.editing
    })
    return (
      <li className={ classes }>{ element }</li>
    );
  }
}
