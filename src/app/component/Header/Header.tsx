import * as React from 'react';
import { Button, Input } from 'antd';
import './styles.scss';
const Search = Input.Search;

export interface HeaderProps{
  isSearch?:boolean;
  store?:any;
  [key:string]:any;
  
}

export class Header extends React.Component<HeaderProps,any> {
  static defaultProps = {
    isSearch:false,

  }
  private store = this.props.store;
  constructor(props:HeaderProps){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <header className={ `flex-vcenter jc-between header` }>
        <div className="flex-vcenter">
          <h2>名称</h2>
          <Button onClick={ () => this.store.getData() } className="ml20" type="primary" shape="circle" icon="sync" />
        </div>
        <div className="mr20">
          { this.props.isSearch  && (
            <Search
            placeholder="请输入关键字搜索..."                           
            onSearch={() => {  } }
            style={{ width: 200 }}
          />
          )}
        </div>
      </header>
    );
  }
}