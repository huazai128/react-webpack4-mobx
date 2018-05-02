import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import App from 'app';
import { creactStore } from "app/store";
import { TodoModel } from 'app/models';

const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true)
];

const history = createBrowserHistory();
const rootStore = creactStore(history,defaultTodos);

ReactDOM.render(
  <Provider {...rootStore}>
    <App></App>
  </Provider>
 ,
  document.getElementById('root')
);