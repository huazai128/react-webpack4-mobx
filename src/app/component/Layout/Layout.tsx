import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { autobind } from 'core-decorators';
import routes from 'app/router';
import { RouterModel } from 'app/models';
const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

export interface LayoutProps{
	[key:string]:any;
}

export interface LayoutState {
	collapsed: boolean;
}

@autobind
export class LayoutComponent extends React.Component<LayoutProps, LayoutState>{
	constructor(props: any) {
		super(props);
		this.state = {
			collapsed: false
		}
	}
	private onCollapse () {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}
	render() {
		const { collapsed } = this.state;
		const { pathname } = this.props!.location;
		return (
			<Sider
				width={180}
				collapsible
				collapsed={collapsed}
				onCollapse={this.onCollapse}>
				<Menu theme="dark" selectedKeys={[pathname]} mode="inline">
					{routes.map((item: RouterModel<any>, index: number) => (
						item.children ? (
							<SubMenu key={item.name} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
								{item.children.map((list: RouterModel<any>, index: number) => {
									<Menu.Item key={list.path}>
										<Link to={list.path}>{item.icon && <Icon type={list.icon} />}<span>{list.name}</span></Link>
									</Menu.Item>
								})}
							</SubMenu>
						) : (
								<Menu.Item key={item.path}>
									<Link to={item.path}>{item.icon && <Icon type={item.icon} />}<span>{item.name}</span></Link>
								</Menu.Item>
							)
					))}
				</Menu>
			</Sider>
		)
	}
}
