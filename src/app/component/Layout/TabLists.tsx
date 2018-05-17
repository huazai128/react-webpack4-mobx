import * as React from 'react';
import { Tabs } from 'antd';
import { RouterModel } from 'app/models';
import { HomeStore } from 'app/store';
import { observer } from 'mobx-react';
// import { toJS } from 'mobx';
const TabPane = Tabs.TabPane;

interface TabListsProps {
	[key: string]: any;
}

interface TabListsState {
	paths: RouterModel<any>[];
}

@observer
export class TabLists extends React.Component<TabListsProps, TabListsState>{
	constructor(props: TabListsProps) {
		super(props);
		this.state = {
			paths: []
		}
	}
	private home = this.props.store as HomeStore;
	get pathname() {
		return this.props.location.pathname;
	}
	get history() {
		return this.props.history;
	}
	render() {
		console.log(this.home.tabs);
		return (
			<Tabs
				hideAdd
				style={{ height: "100%" }}
				className="main-tags"
				onChange={(key) => {}}
				activeKey={this.pathname}
				type="editable-card"
				onEdit={() => { }}>
				{/* {this.home.tabs.map((item) => (
					<TabPane tab={ <span></span> } key={ item.path } >{item.name}</TabPane>
				))} */}
			</Tabs>
		)
	}
}
