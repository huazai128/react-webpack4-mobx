import * as React from 'react'
import DevTools,{IDevToolProps } from 'mobx-react-devtools'

export interface RootProps{
  children?:React.ReactNode;
}
export interface RootState{
  opt?:IDevToolProps;
}

export default class Root extends React.Component<RootProps,RootState>{
  constructor(props:RootProps){
    super(props);
    this.state = {
      opt:{
        position:{
          top:0,
          right: 0,
        }
      }
    }
  }
  renderDevTool(){
    const isProduction = process.argv.indexOf('-p') >= 0;
    if(!isProduction){
      return <DevTools { ...this.state.opt } />
    }
  }
  render(){
    return (
      <div className="container">
        { this.props.children }
        { this.renderDevTool() }
      </div>
    )
  }
}