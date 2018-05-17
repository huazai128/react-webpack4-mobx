
import * as React from 'react';

export interface RouterModel<P> {
	name: string;
	icon?: string;
	path: string;
	Component: React.ComponentType<P>;
	children?:RouterModel<P>[];
}

export interface TabModel{
	path:string;
}
