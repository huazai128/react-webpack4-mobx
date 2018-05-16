import * as React from 'react';
import TodoTextInput from 'app/component/TodoTextInput';
import { TodoModel } from 'app/models/TodoModel';

interface HeadProps {
	addTodo: (todo: Partial<TodoModel>) => any; // Partial:表示TodoModel接口里面的类型都是可选的
}

export default class Head extends React.Component<HeadProps, any> {
	constructor(props: HeadProps) {
		super(props);
	}
	private handleSave = (text: string) => {
		this.props.addTodo({ text });
	}
	render() {
		return (
			<header>
				<h1>Todos</h1>
				<TodoTextInput
					newTodo
					type="text"
					placeholder="请输入你的Todo"
					onSave={this.handleSave}></TodoTextInput>
			</header>
		);
	}
}
