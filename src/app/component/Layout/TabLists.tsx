import * as React from 'react';
import { Tabs } from 'antd';
import { HomeStore } from 'app/store';
import { observer } from 'mobx-react';
import { History } from 'history';
import { toJS } from 'mobx';
import './style.less';
const TabPane = Tabs.TabPane;

interface TabListsProps {
	[key: string]: any;
}

interface TabListsState {

}

@observer
export class TabLists extends React.Component<TabListsProps, TabListsState>{
	private home = this.props.home as HomeStore;
	constructor(props: TabListsProps) {
		super(props);
	}
	get pathname(): History.Pathname {
		return this.props.location.pathname;
	}
	get history(): History {
		return this.props.history;
	}
	render() {
		return (
			<Tabs
				hideAdd
				onChange={(key) => this.history.push(key)}
				activeKey={this.pathname}
				type="editable-card"
				onEdit={(key) => this.home.change(key, this.history.push)}>
				{toJS(this.home.tabs).map(pane => {
					const { Component } = pane;
					return (
						<TabPane tab={pane.name} key={pane.path}>
							<div className="cont">
								{Component ? <Component></Component> : <div>暂无内容</div>}
							</div>
						</TabPane>
					)
				})}
			</Tabs>
		)
	}
}
