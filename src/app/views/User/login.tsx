import * as React from 'react';
import { Input, Button, Icon, Checkbox, Alert } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import { STOER_LOGIN } from 'app/constans';
import { LoginStore, LoginModel } from 'app/store/LoginStore';
import axios from 'axios';
import * as Qs from 'qs';

import './login.less';
const FormItem = Form.Item;

export interface LoginProps extends FormComponentProps {
	login?: LoginStore;
}

export interface LoginState {
	type: string;
	isLoding: boolean;
	err: boolean;
}

@inject(STOER_LOGIN)
@observer
class Login extends React.Component<LoginProps, LoginState> {
	constructor(props: LoginProps, content: any) {
		super(props);
		this.state = {
			type: 'account',
			isLoding: false,
			err: false,
		}
	}
	private store = this.props.login;
	private handleSubmit = (e: React.SyntheticEvent<any>) => {
		e.preventDefault();
		this.props.form.validateFields({ force:true }, async (err,values) => {
			const obj = {
				client_id: "TxxGjYZCAUbQgxipKzWZtjvYugGGoQdVIYSUSvAhqKWPlWNyqdZSOOIMVcUJQLFw",
				client_secret: "iFAeXVElWvIqHFJFrAmpeFpizMTLJiYx",
				grant_type: 'password',
			}
			if(!err){
				this.setState({ isLoding:true })
				try {
					const { data } = await axios({
						method:'post',
						baseURL:'https://sscsapi.fongwell.com',
						url:'/oauth/token',
						data: Qs.stringify(Object.assign(obj,values)),
					})


				} catch (error) {
					this.setState({ err:true,isLoding:false })
				}
			}
		})
	}

	private renderMessage = (msg: string) => {
		return (<Alert message={msg} type="error" afterClose={ () => { this.setState({ err:false }) } } />)
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { type, isLoding, err } = this.state;
		return (
			<div className="wrap">
				<div className="container">
					<div className="main">
						{ err && this.renderMessage('账户或密码错误')}
						<Form onSubmit={this.handleSubmit}>
							<FormItem>
								{getFieldDecorator('username', {
									rules: [{
										required: type === 'account', message: '请输入账户名！',
									}],
								})(
									<Input
										size="large"
										prefix={<Icon type="user" className="prefixIcon" />}
										placeholder="请输入账号"
									/>
								)}
							</FormItem>
							<FormItem>
								{getFieldDecorator('password', {
									rules: [{
										required: type === 'account', message: '请输入密码！',
									}],
								})(
									<Input
										size="large"
										prefix={<Icon type="lock" className="prefixIcon" />}
										type="password"
										placeholder="请输入密码"
									/>
								)}
							</FormItem>
							<FormItem className="additional">
								{getFieldDecorator('remember', {
									valuePropName: 'checked',
									initialValue: true,
								})(
									<Checkbox className="autoLogin">记住密码</Checkbox>
								)}
								<Button size="large" loading={isLoding} className="submit" type="primary" htmlType="submit">登录</Button>
							</FormItem>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default Form.create<LoginProps>()(Login);
