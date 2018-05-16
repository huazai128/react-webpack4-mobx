import { History } from 'history';
import { TodoModel } from 'app/models';
import { TodoStore } from './TodoStore';
import { RouterStore } from './RouterStore';
import { LoginStore } from './LoginStore';
import { STORE_TODO, STORE_ROUTER, STOER_LOGIN } from 'app/constans';

export const creactStore = (history: History, defaultTodos: TodoModel[]) => {
	const todoStore = new TodoStore(defaultTodos);
	const routerStore = new RouterStore(history);
	const loginStore = new LoginStore();
	return {
		[STORE_TODO]: todoStore,
		[STORE_ROUTER]: routerStore,
		[STOER_LOGIN]: loginStore
	};
}
