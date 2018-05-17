import "./style.less"
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import App from 'app';
import { creactStore } from "app/store";
import { TodoModel } from 'app/models';
import { Router, withRouter } from 'react-router-dom';
import Root from 'app/component/Root';

const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true)
];

const history = createBrowserHistory();
const rootStore = creactStore(history,defaultTodos);
const Wrap = withRouter((props) => <App {...props} />)

ReactDOM.render(
  <Provider {...rootStore}>
    <Root>
      <Router history={ history }>
        <Wrap></Wrap>
      </Router>
    </Root>
  </Provider>
 ,
  document.getElementById('root')
);
