import * as React from 'react';
import { TodoModel } from 'app/models';
import * as styles from './style.scss';

interface TodoListsProps {
  todos:TodoModel[];

}

export default class TodoLists extends React.Component<any,any> {
  constructor(props:any){
    super(props);
  }
  render() {
    return (
      <div className="main">

      </div>
    );
  }
}
