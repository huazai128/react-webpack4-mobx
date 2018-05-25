import * as React from 'react'

interface HandleAreaProps {
	children: React.ReactNode;
	cls?: any;
	style?: object
}

export class HandleArea extends React.Component<HandleAreaProps, any> {
	render() {
		const { cls, style, children } = this.props;
		return (
			<div className={cls} style={{ margin: 8, marginBottom: 0, ...style }}>
				{ children }
			</ div>
		);
	}
}
