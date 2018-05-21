import * as React from 'react';

interface ContainerProps {
  children?:React.ReactNode;
}

export class Container extends React.Component<ContainerProps,any> {
  render() {
    return (
      <div style={{ backgroundColor: '#E6EAF3', height: '100%' }} className="flex-col">
        { this.props.children }
      </div>
    );
  }
}