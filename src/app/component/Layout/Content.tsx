import * as React from 'react';

interface ContentProps {
  children:React.ReactNode;
  style?:React.CSSProperties;
  classes?:React.ClassicComponent
}

export class Content extends React.Component<ContentProps,any> {
  render() {
    return (
      <div style={{ overflow: 'auto',...this.props.style, backgroundColor: '#fff', margin: 8, borderRadius: 4 }} className={`${ this.props.classes } flex-col flex-g-1`}>
        { this.props.children }
      </div>
    );
  }
}