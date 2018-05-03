import * as React from 'react';
import { TodoModel } from 'app/models';
import TodoItem,{ TodoActions } from 'app/component/TodoItem';
import * as styles from './styles.scss';

interface TodoListsProps extends TodoActions{
  todos:TodoModel[];
  completeAll:() => any;
}

interface TodoListsState{

}

export default class TodoLists extends React.Component<TodoListsProps,TodoListsState> {
  constructor(props:TodoListsProps,context?:any){
    super(props,context);
  }

  renderToggleAll(){
    const { todos } = this.props;
    const completedCount = todos.length;
    if(todos.length > 0){
      return (
        <input 
          className={ styles.toggleAll }
          checked={ completedCount === todos.length }
          onChange={ this.handleChangeAll }
          type="checkbox" />
      )
    }
  }

  private handleChangeAll = (e:React.SyntheticEvent<any>) => {
    e.preventDefault();
    this.props.completeAll();
  }
  render() {
    const { todos,...action } = this.props;
    return (
      <section className={ styles.main }>
        <ul className={ styles.normal }>
          { todos.map((item,index) => (
            <TodoItem key={ index } todo={ item } { ...action } />
          )) }
        </ul>
      </section>
    );
  }
}
