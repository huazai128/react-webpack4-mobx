import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'app/views/User/login';
import { LayoutComponent } from 'app/component/Layout';
import { autobind } from 'core-decorators';
import route from 'app/router';
// import { TabLists } from 'app/component/Layout';


export class GetTab extends React.Component<any,any>{
	constructor(props:any){
		super(props);
	}
	componentDidMount(){
		console.log("大大大大")
	}
	render():any {
		return null;
	}
}

@autobind
export default class App extends React.Component<any, any>{
	constructor(props: any) {
		super(props);
		this.state = {
			isLogin: true
		}
	}
	componentWillReceiveProps(nextProps:any){

	}
	render() {
		const { isLogin } = this.state;
		const login = !isLogin && (<Route exact path="/login" component={Login} ></Route>);
		const Layout = () => {
			return (
				<div style={{ height: "100%", width: '100%' }}>
					<LayoutComponent {...this.props} />
					<div className="flex-g-1 flex-col">
						{/* <TabLists /> */}
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
						<Route exact key={index} path={item.path} render={(props) => {
							return <GetTab />
						}} ></Route>
					))}
				</Switch>
			</div>

		)
	}
}
