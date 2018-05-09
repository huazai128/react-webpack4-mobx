import * as React from 'react';
import { Route,Switch } from 'react-router-dom';
import TodoApp from 'app/views/TodoApp';
import Lists from 'app/views/Lists/lists';

export default class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);
  }
  render(){
    return (
      <Switch>
        <Route exact path="/" component={TodoApp} ></Route>
        <Route exact path="/lists" component={Lists} ></Route>
      </Switch>
    )
  }
}