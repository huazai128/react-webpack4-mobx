import { asyncComponent } from 'react-async-component';
import { RouterModel } from 'app/models'

const routes:RouterModel<any>[] = [
	{
		name: '首页',
		icon: 'tags-0',
		path: '/',
		Component: asyncComponent({
			resolve:() => import("app/views/TodoApp")
		}),
	},
]

export default routes;
