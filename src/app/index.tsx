import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'app/views/User/login';
import { LayoutComponent } from 'app/component/Layout';
import route from 'app/router';

export default class App extends React.Component<any, any>{
	constructor(props: any) {
		super(props);
		this.state = {
			isLogin: true
		}
	}
	render() {
		const { isLogin } = this.state;
		const login = !isLogin && (<Route exact path="/login" component={Login} ></Route>);
		const Layout = () => {
			return (
				<div style={{ height: "100%", width: '100%' }}>
					<LayoutComponent {...this.props} />
					<div className="flex-g-1 flex-col">

					</div>
				</div>
			)
		}
		return (
			<div style={{ height: "100%" }}>
				{ isLogin && <Layout /> }
				<Switch key="Switch">
					{login}
					{route.map((item, index) => (
						<Route exact key={index} path={item.path} component={item.Component} ></Route>
					))}
				</Switch>
			</div>

		)
	}
}
