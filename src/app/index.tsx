import * as React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Root from 'app/component/Root';
import TodoApp from 'app/views/TodoApp';

export default class App extends React.Component<any,any>{
  constructor(props:any){
    super(props);
  }
  render(){
    return (
      <Root>
        <Router>
          <Switch>
            <Route exact path="/" component={TodoApp} ></Route>
          </Switch>
        </Router>
      </Root>
      
    )
  }
}