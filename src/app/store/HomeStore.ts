import { observable, action } from 'mobx';
import { RouterModel } from 'app/models';

export class HomeStore {
	constructor() { }

	@observable tabs: RouterModel<any>[] = [];

	// 新增
	@action
	add = (tab: RouterModel<any>): void => {
		const { path } = tab;
		const index = this.tabs.findIndex((item) => Object.is(item.path, path));
		if (index > 0) return;
		this.tabs = [...this.tabs, tab];
	}

	// 改变
	@action
	change = (key: any, push: Function): void => {
		console.log(key)
	}

}

export default HomeStore;
