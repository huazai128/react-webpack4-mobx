
import * as React from 'react';

export interface RouterModel<T> {
	name: string;
	icon?: string;
	path: string;
	Component: React.ComponentType<T>;
	children?:RouterModel<T>[];
	permissions?:string;
}
