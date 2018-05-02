import * as React from 'react';
import { STORE_ROUTER,STORE_TODO,TODO_FILTER_LOCATION_HASH,TodoFilter} from 'app/constans';
import { inject,observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router-dom';
import { TodoStore, RouterStore } from 'app/store';
import Head from 'app/component/Head';
import Footer from 'app/component/Footer';
import TodoLists from 'app/component/TodoLists';
import './style.scss';

interface TodoAppProps extends RouteComponentProps<any> {
  [STORE_ROUTER]?:RouterStore;
  [STORE_TODO]?:TodoStore;
  children?:React.ReactChildren;
}

interface TodoAppState {
  filter?:TodoFilter;
}

@inject(STORE_ROUTER,STORE_TODO)
@observer
export default class TodoApp  extends React.Component<TodoAppProps,TodoAppState> {
  constructor(props:TodoAppProps,context:any){
    super(props,context);
    this.state = {
      filter: TodoFilter.ALL,
    }
  }

  getFiltered(filter:TodoFilter){
    const todoStore = this.props[STORE_TODO] as TodoStore;
    switch(filter){
      case TodoFilter.ACTIVE :
        return todoStore.activeTodos;
      case TodoFilter.COMPLETED :
        return todoStore.completedTodos;
      default :
        return todoStore.todos
    }
  }

  private handleFilter = (filter:TodoFilter) => {
    const router =  this.props[STORE_ROUTER] as RouterStore;
    const currentHash = router.location.hash;
    const nextHash = TODO_FILTER_LOCATION_HASH[filter];
    if(currentHash !== nextHash){
      return router.replace(nextHash);
    }
  }

  render(){
    const todoStore = this.props[STORE_TODO] as TodoStore;
    const { filter } = this.state;
    const { children } = this.props;
    const filteredTodos = this.getFiltered(filter);
    const footer = todoStore.todos.length && (
      <Footer 
        selectedFilter={ filter }
        completedCount={ todoStore.completedTodos.length }
        activeCount={ todoStore.activeTodos.length }
        onClearCompleted= { todoStore.clearCompleted }
        onChangeFilter={ this.handleFilter }
        ></Footer>
    )
    return (
      <div className="normal">
        <Head addTodo={ () => {} }></Head>
        <TodoLists todos={ filteredTodos }></TodoLists>
        { footer }
        { children }
      </div>
    )
  }
};
