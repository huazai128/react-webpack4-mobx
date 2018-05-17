import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'app/views/User/login';
import { LayoutComponent } from 'app/component/Layout';
import { inject, observer } from 'mobx-react';
import route from 'app/router';
import { TabLists } from 'app/component/Layout';
import { STORE_HOME } from 'app/constans';

export interface AppProps {
	[key: string]: any;
}

@observer
export class GetTab extends React.Component<AppProps, any>{
	constructor(props: AppProps) {
		super(props);
	}
	componentDidMount() {
		const { store,tag } = this.props;
		store.add(tag);
	}
	render(): any {
		return null;
	}
}

@inject(STORE_HOME)
@observer
export default class App extends React.Component<AppProps, any>{
	constructor(props: AppProps) {
		super(props);
		this.state = {
			isLogin: true
		}
	}
	private home = this.props.home;
	render() {
		const { isLogin } = this.state;
		const login = !isLogin && (<Route exact path="/login" component={Login} ></Route>);
		const Layout = () => {
			return (
				<div style={{ height: "100%", width: '100%' }}>
					<LayoutComponent {...this.props} />
					<div className="flex-g-1 flex-col">
						<TabLists { ...this.props } />
					</div>
				</div>)
		}
		return (
			<div style={{ height: "100%" }}>
				{isLogin && <Layout />}
				<Switch key="Switch">
					{login}
					{route.map((item, index) => (
						<Route exact key={index} path={item.path} render={(props) => {
							return <GetTab store={this.home} tag={{ ...item}}/>
						}} ></Route>
					))}
				</Switch>
			</div>

		)
	}
}
