import { asyncComponent } from 'react-async-component';
import { RouterModel } from 'app/models'

const routes:RouterModel<any>[] = [
	{
		name: '首页',
		icon: 'tags-0',
		path: '/',
		Component: asyncComponent({
			resolve:() => import("app/views/Tag/tag")
		}),
		permissions: 'PERMISSION_VIEW_ATTR',
	},
	{
		name: '首页',
		icon: 'tags-0',
		path: '/tag',
		Component: asyncComponent({
			resolve:() => import("app/views/Tag/tag")
		}),
		permissions: 'PERMISSION_VIEW_ATTR',
	}
]

export default routes;
