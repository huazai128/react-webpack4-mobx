import * as React from 'react';
import { Tabs } from 'antd';
import { TabModel } from  'app/models';
const TabPane = Tabs.TabPane;

interface TabListsProps {
	[key:string]:any;
}
interface TabListsState{
	paths:TabModel[];
}

export class TabLists extends React.Component<TabListsProps,TabListsState>{
	constructor(props:TabListsProps){
		super(props);
		this.state = { 
			paths:[]
		}
	}
	render(){
		return(
			<Tabs>
				<TabPane></TabPane>
			</Tabs>
		)
	}
}
